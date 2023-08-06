import http from "http";
import fs from "fs";
import path from "path";

class StaticFileServer {
  /**@type {number} */
  #port = 5000;
  /**@type {string} */
  #staticPath = "";
  #server;
  /**
   * Creates a new instance of the StaticFileServer.
   * @param {number} port The number of port to listen.
   * @param {string} staticPath The paht where are the files.
   */
  constructor(port, staticPath) {
    this.#port = port;
    this.#staticPath = staticPath;

    this.#server = http.createServer(this.#handleRequest.bind(this));
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
   * Handles incoming HTTP requests by serving static files.
   *
   * @param {http.IncomingMessage} req - The HTTP request object.
   * @param {http.ServerResponse} res - The HTTP response object.
   */
  #handleRequest(req, res) {
    /**
     * Parse the URL to extract the requested file path or default to "index.html".
     * @type {string}
     */
    const parsedUrl =
      req.url
        ?.split("/")
        .find((str) => new RegExp(/\w+\.[a-z]{1,5}/g).test(str)) ||
      "index.html";

    console.log(`GET: ${parsedUrl} at ${new Date()}`);
    console.log("----------");

    /**
     * Construct the absolute file path to the requested resource.
     * @type {string}
     */
    const filePath = path.join(this.staticPath, `/${parsedUrl}`);

    /**
     * Determine the content type of the requested file.
     * @type {string}
     */
    const contentType = this.#getContentType(filePath);

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === "ENOENT") {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("File not found");
        } else {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Server error");
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
  }

  /**
   * Set the content type to be served for the header.
   * @param {string} filePath The paht for the file to be served.
   * @returns {string} The content type tbe server.
   */
  #getContentType(filePath) {
    const contentsTypes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
    };
    const fileExtension = path.extname(filePath);
    return contentsTypes[fileExtension] || "text/plain";
  }
}

export default StaticFileServer;
