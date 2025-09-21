import React from 'react';
import s from '../welcome.module.css';
import basketDelete from "../../../img/basket_delete.png";
import { useCart } from '../Context/CartContext'
import del from "app/img/basket_del.png"
interface BasketProps {
    isOpen: boolean;
    onClose: () => void;
}

const Basket: React.FC<BasketProps> = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

    return isOpen ? (
        <div className={s.basket_container}>
            <div className={s.basketOpen}>
                <div className={s.header_basketOpen}>
                    <h1 className={s.basket_title}>Корзина </h1>
                    <button className={s.basket_button} onClick={onClose}>
                        <img className={s.basket_img} src={basketDelete} />
                    </button>
                </div>

                <div className={s.shopping_list}>
                    {cartItems.length === 0 ? (
                        <p className={s.basket_p} >Корзина пуста</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className={s.cart_item}>

                                <img src={item.image} className={s.cart_item_image} />
                                <div >
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
                                        <img className={s.cart_delete_img} src={del} alt="delt" />  Удалить
                                    </button>
                                    <p className={s.cart_price} >${item.price} </p>

                                </div>

                            </div>
                        ))
                    )}
                    {cartItems.length > 0 && (
                        <div className={s.price_total}><h3 className={s.price_total}>Итого: ${getTotalPrice().toFixed(2)}</h3>
                            <div className={s.cart_total}><button className={s.checkout_btn}>Оформить заказ</button>
                                <button className={s.cart_return_btn} onClick={onClose}>
                                    Продолжить покупки
                                </button></div>

                        </div>
                    )}
                    {cartItems.length > 0 && (<div><h3 className={s.mobile_price_total}>Итого: <div>${getTotalPrice().toFixed(2)}</div></h3>
                    </div>
                    )}
                </div>

                <div className={s.additional_product}>
                    <p className={s.related_product}>С этим покупают</p>
                </div>
                {cartItems.length > 0 && (
                    <div className={s.mobile_price_total}>
                        <div className={s.mobile_cart_total}><button className={s.mobile_checkout_btn}>Оформить заказ</button>
                            <button className={s.mobile_cart_return_btn} onClick={onClose}>
                                Продолжить покупки
                            </button></div>

                    </div>)}
            </div>

        </div>
    ) : null;
};

export default Basket;