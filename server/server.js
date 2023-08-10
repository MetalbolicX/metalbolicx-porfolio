import http from "http";
import fs from "fs";
import path from "path";

class StaticFileServer {
  /**@type {number} */
  #port = 5000;
  /**@type {string} */
  #staticPath = "";
  #server;
  #fileCache = {}; // Cache to store file content
  /**
   * Creates a new instance of the StaticFileServer.
   * @param {number} port The number of port to listen.
   * @param {string} staticPath The paht where are the files.
   */
  constructor(port, staticPath) {
    this.#port = port;
    this.#staticPath = staticPath;

    this.#server = http.createServer(this.#handleRequest.bind(this));
    this.#populateFileCache();
  }

  get port() {
    return this.#port;
  }

  get staticPath() {
    return this.#staticPath;
  }

  get server() {
    return this.#server;
  }

  start() {
    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  /**
   * Populate the file cache by reading file contents on server initialization.
   */
  #populateFileCache() {
    const fileCache = fs
      .readdirSync(this.staticPath)
      .reduce((aggregated, file) => {
        const [filename, fileextension] = file.split(".");
        // Check whether if the file extension exists otherwise create an empty array.
        const files = aggregated[fileextension] || [];
        const fullPath = `${path.join(this.staticPath, filename)}.${fileextension}`;
        try {
          const filecontent = fs.readFileSync(fullPath, "utf8");
          return {
            ...aggregated,
            [fileextension]: [
              // Create a list of object for each file and its content
              ...files,
              { filename, filecontent },
            ],
          };
        } catch (err) {
          throw new Error(`Error reading file ${fullPath}: ${err.message}`);
        }
      }, {});

    this.#fileCache = { ...fileCache };
  }

  /**
   * Handles incoming HTTP requests by serving static files from cache.
   *
   * @param {http.IncomingMessage} req - The HTTP request object.
   * @param {http.ServerResponse} res - The HTTP response object.
   */
  #handleRequest(req, res) {
    const parsedUrl =
      req.url
        ?.split("/")
        .find((str) => new RegExp(/\w+\.[a-zA-Z]{1,5}/gi).test(str)) ||
      "index.html";

    console.log(`GET: ${parsedUrl} at ${new Date()}`);
    console.log("----------");

    const [fileName, fileExtension] = parsedUrl.split(".");
    const cachedContent = this.#fileCache[fileExtension].find(
      (file) => file.filename === fileName
    );

    if (cachedContent) {
      const contentType = this.#getContentType(fileExtension);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(cachedContent.filecontent, "utf-8");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
    }
  }

  /**
   * Set the content type to be served for the header.
   * @param {string} fileExtension The extension of the file to be served.
   * @returns {string} The content type tbe server.
   */
  #getContentType(fileExtension) {
    const contentsTypes = {
      html: "text/html",
      css: "text/css",
      js: "text/javascript",
    };
    return contentsTypes[fileExtension] || "text/plain";
  }
}

export default StaticFileServer;
