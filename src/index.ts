import loader from "./internal/routes/loader";
import router from "./pkg/router/router";

window.onload = loader;
window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);