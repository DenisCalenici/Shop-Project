
import React from 'react';
import { useCart } from '../welcome/Context/CartContext';
import del from "app/img/basket_del.png";
import s from './CheckoutForm.module.css'; 

const OrderCart: React.FC = () => {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className={s.order_cart_empty}>
                <p>Корзина пуста</p>
            </div>
        );
    }

    return (
        <div className={s.order_cart}>
           

            <div className={s.order_cart_items}>
                {cartItems.map(item => (
                    <div key={item.id} className={s.order_cart_item}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className={s.order_cart_item_image}
                        />

                        <div className={s.order_cart_item_details}>
                            <h3 className={s.order_cart_item_title}>{item.title}</h3>

                            <div className={s.order_cart_item_controls}>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className={s.order_cart_item_info}>
                            <p className={s.order_cart_item_price}>${item.price}</p>
                            <button
                                className={s.order_cart_delete_btn}
                                onClick={() => removeFromCart(item.id)}
                            >
                                <img src={del} alt="Удалить" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={s.order_cart_total}>
                <h3>Итого: ${getTotalPrice().toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default OrderCart;