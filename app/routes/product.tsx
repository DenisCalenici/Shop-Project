
import type { Route } from "./+types/home";
import ProductPage from "~/components/ProductPage/ProductPage";
import Layout from "~/components/Layout/Layout";
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Product" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return <Layout title="Товар">
        <ProductPage />
    </Layout>
}




