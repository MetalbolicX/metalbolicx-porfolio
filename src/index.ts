import loader from "./routes/loader";
import renderPage from "./routes/renderpage";

window.onload = loader;
window.addEventListener("DOMContentLoaded", renderPage);
window.addEventListener("hashchange", renderPage);