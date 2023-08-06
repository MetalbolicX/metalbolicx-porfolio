import path from "path";
import { fileURLToPath } from "url";
import StaticFileServer from "./server.js";

const port = 5000;
const staticPath = path.join(
  path.dirname(fileURLToPath(new URL(import.meta.url))),
  "..",
  "dist"
);

const server = new StaticFileServer(port, staticPath);
server.start();