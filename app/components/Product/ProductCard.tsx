import s from '../welcome/welcome.module.css'
import type { IProductCard } from "~/components/Product/ProductCard.type"
import { Link } from "react-router";
import { useCartActions } from '../Hooks/useCartActions'
import podarok from '..//..//img/podarok.png'
import none from '..//..//img/button_none.png'
interface ProductProps {
    product: IProductCard;
    onProductClick?: (product: IProductCard) => void;
}

const ProductCard = ({ product, onProductClick }: ProductProps) => {
    const { handleAddToBasket } = useCartActions();

    const handleClick = () => {
        if (onProductClick) {
            onProductClick(product);
        }
    };


    const handleAddToBasketClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        handleAddToBasket(e, product);
    };

    if (!product || !product.id || !product.title || !product.image) {
        console.error('ProductCard: Некорректные данные продукта');
        return null;
    }

    return (
        <div className={s.product_cards} key={product.id}>

            <Link to={`/product/${product.id}`} onClick={handleClick} className={s.product_link}>
                <div className={s.filter_castle}>
<div className={s.filter_castle_button_container}>
                    <button className={s.filter_castle_button_1}>
                        <img src={none} />
                    </button>
                    <button
                        onClick={handleAddToBasketClick}
                        className={s.filter_castle_button_2}
                    >
                        SALE
                    </button>
                    <p className={s.filter_castle_availability_p}>Нет в наличии </p>

</div>



                    <div className={s.filter_castle_button_body3}>
                        <button className={s.filter_castle_button_3}>
                            <img className={s.filter_castle_podarok_3} src={podarok} /> Подарок
                        </button>
                    </div>
                    <img src={product.image} className={s.filter_castle_img} />
                </div>

                <h2 className={s.price_card_name_p}>{product.title}</h2>
                <p className={s.price_card_reviews_p}>Рейтинг: {product.rating.rate} ({product.rating.count} отзывов)</p>
                <p className={s.price_current_price} >Цена: ${product.price}</p>
            </Link>
        </div>
    );
};

export default ProductCard;