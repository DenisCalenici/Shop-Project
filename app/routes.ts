import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"),
    route("product/:id", "routes/product.tsx"),


] satisfies RouteConfig;