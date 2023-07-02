import loader from "./routes/loader";
import router from "./routes/routes";

window.onload = loader;
window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);