// app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("product/:id", "routes/product.tsx"),
    route("forms", "routes/forms.tsx"), // ✅ Убедитесь что эта строка есть
] satisfies RouteConfig;