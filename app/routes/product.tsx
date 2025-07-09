
import type { Route } from "./+types/home";
import ProductPage from "~/components/ProductPage/ProductPage";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Product" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return <ProductPage />;
}




