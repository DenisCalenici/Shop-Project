
import s from '../welcome/welcome.module.css'
import type { IProductCard } from "~/components/Product/ProductCard.type"
import { Link } from "react-router";

interface ProductProps {
    product: IProductCard
}

const ProductCard = ({ product }: ProductProps) => {





    return (
        <Link to={`/product/${product.id}`}>
            <div className={s.product_cards} key={product.id} >
                <div className={s.filter_castle}>
                    <button className={s.filter_castle_button_1}>
                        <img src='app/img/button_none.png' />  </button>
                    <p className={s.filter_castle_availability_p}>Нет в наличии </p>
                    <button className={s.filter_castle_button_2}>SALE </button>
                    <div className={s.filter_castle_button_body3}>
                        <button className={s.filter_castle_button_3}>
                            <img className={s.filter_castle_podarok_3} src='app/img/podarok.png' /> Подарок </button>
                    </div>
                    <img src={product.image} className={s.filter_castle_img} alt={product.title} />
                </div>
                <h2 className={s.price_card_name_p}>{product.title}</h2>
                <p className={s.price_card_reviews_p}>Рейтинг: {product.rating.rate} ({product.rating.count} отзывов)</p>
                <p className={s.price_current_price} >Цена: ${product.price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
