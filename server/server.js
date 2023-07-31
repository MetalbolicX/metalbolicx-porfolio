import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOTDIRECTORY = path.dirname(fileURLToPath(new URL(import.meta.url))).split(path.sep).slice(0, -1).join(path.sep);

const server = http.createServer((req, res) => {
  // Set content type based on file extension
  const parsedUrl = req.url?.split("/").at(-1) || "index.html";
  const filePath = path.join(ROOTDIRECTORY, "dist", `/${parsedUrl}`);
  const contentType = getContentType(filePath);

  // Read the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // File not found
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File not found");
      } else {
        // Server error
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server error");
      }
    } else {
      // File found
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

// Start the server
const port = 5000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/**
 * Determines the content type based on file extension.
 * @param {string} filePath Absolute path directory for the file to be send by the server.
 * @returns {string} The content type to be sent by the server.
 */
function getContentType(filePath) {
  const contentsTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript"
  };
  const fileExtension = path.extname(filePath);
  return contentsTypes[fileExtension] || "text/plain";
}
