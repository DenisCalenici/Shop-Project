import React, { useState, useEffect } from 'react';
import s from '../welcome.module.css';
import basketDelete from "../../../img/basket_delete.png";
import { useCart } from '../Context/CartContext';
import del from "app/img/basket_del.png";
import type { IProductCard } from '~/components/Product/ProductCard.type';
import PopularCombos from "./PopularCombos"
interface BasketProps {
    isOpen: boolean;
    onClose: () => void;
}

const Basket: React.FC<BasketProps> = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
    const [recommendedProducts, setRecommendedProducts] = useState<IProductCard[]>([]);
    const [loadingRecommended, setLoadingRecommended] = useState<boolean>(true);

    const addToBasket = (product: IProductCard) => {
        console.log('Товар добавлен в корзину:', product);

    };


    const getRandomProducts = (products: IProductCard[], count: number): IProductCard[] => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };


    useEffect(() => {
        const fetchRecommendedProducts = async () => {
            try {
                setLoadingRecommended(true);
                const response = await fetch('https://fakestoreapi.com/products');

                if (!response.ok) {
                    throw new Error(`Ошибка при загрузке данных: ${response.status}`);
                }

                const data: IProductCard[] = await response.json();

                const randomProducts = getRandomProducts(data, 10);
                setRecommendedProducts(randomProducts);
            } catch (err) {
                console.error('Ошибка загрузки рекомендуемых товаров:', err);
            } finally {
                setLoadingRecommended(false);
            }
        };

        if (isOpen) {
            fetchRecommendedProducts();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={s.basket_container}>
            <div className={s.basketOpen}>

                <div className={s.header_basketOpen}>
                    <h1 className={s.basket_title}>Корзина</h1>
                    <button className={s.basket_button} onClick={onClose}>
                        <img className={s.basket_img} src={basketDelete} alt="Закрыть" />
                    </button>
                </div>


                <div className={s.shopping_list}>
                    {cartItems.length === 0 ? (
                        <p className={s.basket_p}>Корзина пуста</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className={s.cart_item}>
                                <img src={item.image} alt={item.title} className={s.cart_item_image} />
                                <div className={s.cart_controls}>
                                    <h3 className={s.cart_name}>{item.title}</h3>
                                    <div className={s.cart_item_controls}>
                                        <button
                                            className={s.zoom_out_btn}
                                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className={s.product_quantity}>{item.quantity}</span>
                                        <button
                                            className={s.zoom_btn}
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className={s.cart_item_info}>
                                    <button
                                        className={s.cart_delete_btn}
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <img className={s.cart_delete_img} src={del} alt="Удалить" />
                                        Удалить
                                    </button>
                                    <p className={s.cart_price}>${item.price}</p>
                                </div>
                            </div>
                        ))
                    )}


                </div>
                <div className={s.price_total_container} >  {cartItems.length > 0 && (
                    <div className={s.price_total}>
                        <h3 className={s.price_total_h}>
                            <p className={s.total_price}>Итого</p>
                            <div className={s.price}>${getTotalPrice().toFixed(2)}</div>
                        </h3>
                        <div className={s.cart_total}>
                            <button className={s.checkout_btn}>Оформить заказ</button>
                            <button className={s.cart_return_btn} onClick={onClose}>
                                Продолжить покупки
                            </button>
                        </div>
                    </div>
                )}</div>

                <div className={s.additional_product}>


                    <PopularCombos
                        isOpen={isOpen}
                        addToBasket={addToBasket}
                    />

                    {cartItems.length > 0 && (
                        <div className={s.mobile_price_total}>
                            <div className={s.mobile_cart_total}>
                                <button className={s.mobile_checkout_btn}>Оформить заказ</button>
                                <button className={s.mobile_cart_return_btn} onClick={onClose}>
                                    Продолжить покупки
                                </button>
                            </div>
                        </div>
                    )}
                </div>


            </div>

        </div>
    );
};

export default Basket;  