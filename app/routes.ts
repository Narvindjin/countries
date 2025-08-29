import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./routes/main-page.tsx", [
        route("/", "./routes/home.tsx"),
        route(":countryName", "./routes/detail-page.tsx"),
    ]),
    route("*", "./routes/not-found.tsx")
] satisfies RouteConfig;
