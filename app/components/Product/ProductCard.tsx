import s from '../welcome/welcome.module.css'
import type { IProductCard } from "~/components/Product/ProductCard.type"
import { Link } from "react-router";
import { useCart } from '../welcome/Context/CartContext'

interface ProductProps {
    product: IProductCard;
    onProductClick?: (product: IProductCard) => void;
}

const ProductCard = ({ product, onProductClick }: ProductProps) => {
    const { addToCart } = useCart(); 

    const handleClick = () => {
        if (onProductClick) {
            onProductClick(product);
        }
    };

    const handleAddToBasket = (e: React.MouseEvent) => {
        e.stopPropagation(); 
        e.preventDefault();
        addToCart(product); 
    };

    if (!product || !product.id || !product.title || !product.image) {
        console.error('ProductCard: Некорректные данные продукта');
        return null; // ВОЗВРАЩАЕМ null ВМЕСТО void
    }
    
    return ( // ДОБАВИЛИ return
        <div className={s.product_cards} key={product.id}>
            <Link to={`/product/${product.id}`} onClick={handleClick} className={s.product_link}>
                <div className={s.filter_castle}>
                    <button className={s.filter_castle_button_1}>
                        <img src='app/img/button_none.png' alt="#" />
                    </button>
                    <p className={s.filter_castle_availability_p}>Нет в наличии </p>

                    <button
                        onClick={handleAddToBasket} 
                        className={s.filter_castle_button_2}
                    >
                        SALE
                    </button>

                    <div className={s.filter_castle_button_body3}>
                        <button className={s.filter_castle_button_3}>
                            <img className={s.filter_castle_podarok_3} src='app/img/podarok.png' alt="Подарок" /> Подарок
                        </button>
                    </div>
                    <img src={product.image} className={s.filter_castle_img} alt={product.title} />
                </div>

                <h2 className={s.price_card_name_p}>{product.title}</h2>
                <p className={s.price_card_reviews_p}>Рейтинг: {product.rating.rate} ({product.rating.count} отзывов)</p>
                <p className={s.price_current_price} >Цена: ${product.price}</p>
            </Link>
        </div>
    ); // ЗАКРЫЛИ return
}; // ЗАКРЫЛИ ФУНКЦИЮ

export default ProductCard;