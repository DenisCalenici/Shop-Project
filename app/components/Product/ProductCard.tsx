
import s from '../welcome/welcome.module.css'
import type { IProductCard } from "~/components/Product/ProductCard.type"
import { Link } from "react-router";

interface ProductProps {
    product: IProductCard;
    onProductClick?: (product: IProductCard) => void;
    addToBasket: (product: IProductCard) => void;
}

const ProductCard = ({ product, onProductClick, addToBasket }: ProductProps) => {
    const handleClick = () => {
        if (onProductClick) {
            onProductClick(product);
        }
    };

    if (!product || !product.id || !product.title || !product.image) {
        console.error('ProductCard: Некорректные данные продукта');
        return null;
    }


    return (
        <Link to={`/product/${product.id}`} onClick={handleClick}>
            <div className={s.product_cards} key={product.id} >
                <div className={s.filter_castle}>
                    <button className={s.filter_castle_button_1}>
                        <img src='app/img/button_none.png' />  </button>
                    <p className={s.filter_castle_availability_p}>Нет в наличии </p>
                    <button onClick={() => addToBasket(product)} className={s.filter_castle_button_2}>SALE </button>
                    <div className={s.filter_castle_button_body3}>
                        <button className={s.filter_castle_button_3}>
                            <img className={s.filter_castle_podarok_3} src='app/img/podarok.png' /> Подарок </button>
                    </div>
                    <img src={product.image} className={s.filter_castle_img} />
                </div>
                <h2 className={s.price_card_name_p}>{product.title}</h2>
                <p className={s.price_card_reviews_p}>Рейтинг: {product.rating.rate} ({product.rating.count} отзывов)</p>
                <p className={s.price_current_price} >Цена: ${product.price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;

