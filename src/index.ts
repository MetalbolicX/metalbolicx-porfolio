import loader from "./internal/routes/loader";
import Router from "./pkg/router/router"
import routes from "./internal/routes/routes";

window.onload = loader;

const app: Router = new Router(routes, ".main-container");
app.init();