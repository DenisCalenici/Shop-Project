
import ProductCard from './ProductCard';
import type { IProductCard } from './ProductCard.type';
interface ProductListProps {
    products: IProductCard[];
}
const ProductList = ({ products }: ProductListProps) => {

    return (
        <>
            {products && products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    );
};

export default ProductList;