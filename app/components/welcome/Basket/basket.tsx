import React from 'react';
import { Link } from 'react-router-dom';
import s from '../welcome.module.css';
import basketDelete from "../../../img/basket_delete.png";
import { useCart } from '../Context/CartContext';
import del from "app/img/basket_del.png";
import PopularCombos from './PopularCombos';
import type { IProductCard } from '~/components/Product/ProductCard.type';


interface BasketProps {
    isOpen: boolean;
    onClose: () => void;
    addToBasket: (product: IProductCard) => void;
}

const Basket: React.FC<BasketProps> = ({ isOpen, onClose, addToBasket }) => {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

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
                                <div>
                                    <h3 className={s.cart_name}>{item.title}</h3>
                                    <div className={s.cart_item_controls}>
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className={s.cart_item_info}>
                                    <button className={s.cart_delete_btn} onClick={() => removeFromCart(item.id)}>
                                        <img className={s.cart_delete_img} src={del} alt="Удалить" /> Удалить
                                    </button>
                                    <p className={s.cart_price}>${item.price}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className={s.price_total}>
                        <h3>Итого: ${getTotalPrice().toFixed(2)}</h3>
                        <div className={s.cart_total}>
                            <Link to="/forms" className={s.checkout_btn} onClick={onClose}>
                                Оформить заказ
                            </Link>
                            <button className={s.cart_return_btn} onClick={onClose}>
                                Продолжить покупки
                            </button>
                        </div>
                    </div>
                )}

              
                <PopularCombos addToBasket={addToBasket} isOpen={isOpen} />
            </div>
        </div>
    )

};

export default Basket;