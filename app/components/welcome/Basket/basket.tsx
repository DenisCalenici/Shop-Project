// import React, { useState, useEffect } from 'react';
// import s from '../welcome.module.css';
// import basketDelete from "../../../img/basket_delete.png";
// import { useCart } from '../Context/CartContext'
// import del from "app/img/basket_del.png"
// import type { IProductCard } from '~/components/Product/ProductCard.type';
// import ProductList from '~/components/Product/ProductList';




// interface BasketProps {
//     isOpen: boolean;
//     onClose: () => void;
// }


// const Basket: React.FC<BasketProps> = ({ isOpen, onClose }) => {
//     const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
//     const [products, setProducts] = useState<IProductCard[] | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     const addToBasket = (product: IProductCard) => {
//         console.log('Товар добавлен в корзину:', product);
//     };
//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`Ошибка при загрузке данных: ${response.status}`)
//                 }
//                 return response.json()
//             })
//             .then((data: IProductCard[]) => {
//                 setProducts(data)
//                 setLoading(false)
//             })
//             .catch((err: any) => {
//                 setError(err.message)
//                 setLoading(false)
//             })
//     }, [])

//     if (loading) {
//         return <div>Загрузка...</div>;
//     }
//     return isOpen ? (
//         <div className={s.basket_container}>
//             <div className={s.basketOpen}>
//                 <div className={s.header_basketOpen}>
//                     <h1 className={s.basket_title}>Корзина </h1>
//                     <button className={s.basket_button} onClick={onClose}>
//                         <img className={s.basket_img} src={basketDelete} />
//                     </button>
//                 </div>

//                 <div className={s.shopping_list}>
//                     {cartItems.length === 0 ? (
//                         <p className={s.basket_p} >Корзина пуста</p>
//                     ) : (
//                         cartItems.map(item => (
//                             <div key={item.id} className={s.cart_item}>

//                                 <img src={item.image} className={s.cart_item_image} />
//                                 <div className={s.cart_controls} >
//                                     <h3 className={s.cart_name}>{item.title}</h3>
//                                     <div className={s.cart_item_controls}>
//                                         <button className={s.zoom_out_btn} onClick={() => updateQuantity(item.id, item.quantity - 1)}>
//                                             -
//                                         </button>
//                                         <span className={s.product_quantity}>{item.quantity}</span>
//                                         <button className={s.zoom_btn} onClick={() => updateQuantity(item.id, item.quantity + 1)}>
//                                             +
//                                         </button>

//                                     </div>


//                                 </div>

//                                 <div className={s.cart_item_info}>
//                                     <button className={s.cart_delete_btn} onClick={() => removeFromCart(item.id)}>
//                                         <img className={s.cart_delete_img} src={del} alt="delt" />  Удалить
//                                     </button>
//                                     <p className={s.cart_price} >${item.price} </p>

//                                 </div>

//                             </div>
//                         ))
//                     )}
//                     {cartItems.length > 0 && (
//                         <div className={s.price_total}><h3 className={s.price_total_h}><p className={s.total_price}>Итого</p><div className={s.price}>${getTotalPrice().toFixed(2)}</div></h3>
//                             <div className={s.cart_total}><button className={s.checkout_btn}>Оформить заказ</button>
//                                 <button className={s.cart_return_btn} onClick={onClose}>
//                                     Продолжить покупки
//                                 </button></div>

//                         </div>
//                     )}
//                     {cartItems.length > 0 && (<div><h3 className={s.mobile_price_total}><p className={s.total_price}>Итого</p> <div className={s.price}>${getTotalPrice().toFixed(2)}</div></h3>
//                     </div>
//                     )}
//                 </div>

//                 < div className={s.additional_product}>
//                     <p className={s.related_product}>С этим покупают</p>

//                     <div className={s.additional_product_list} >
//                         {/* <ProductList addToBasket={addToBasket} products={products || []} /> */}

//                     </div>

//                 </div>

//                 {cartItems.length > 0 && (
//                     <div className={s.mobile_price_total}>
//                         <div className={s.mobile_cart_total}><button className={s.mobile_checkout_btn}>Оформить заказ</button>
//                             <button className={s.mobile_cart_return_btn} onClick={onClose}>
//                                 Продолжить покупки
//                             </button></div>

//                     </div>)}
//             </div>

//         </div >
//     ) : null;
// };

// export default Basket;
import React, { useState, useEffect } from 'react';
import s from '../welcome.module.css';
import basketDelete from "../../../img/basket_delete.png";
import { useCart } from '../Context/CartContext';
import del from "app/img/basket_del.png";
import type { IProductCard } from '~/components/Product/ProductCard.type';
import ProductList from '~/components/Product/ProductList';

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
        // Здесь можно добавить логику добавления в корзину
    };

    // Функция для получения случайных товаров
    const getRandomProducts = (products: IProductCard[], count: number): IProductCard[] => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    // Загрузка рекомендуемых товаров
    useEffect(() => {
        const fetchRecommendedProducts = async () => {
            try {
                setLoadingRecommended(true);
                const response = await fetch('https://fakestoreapi.com/products');

                if (!response.ok) {
                    throw new Error(`Ошибка при загрузке данных: ${response.status}`);
                }

                const data: IProductCard[] = await response.json();
                // Берем 10 случайных товаров
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
                {/* Заголовок корзины */}
                <div className={s.header_basketOpen}>
                    <h1 className={s.basket_title}>Корзина</h1>
                    <button className={s.basket_button} onClick={onClose}>
                        <img className={s.basket_img} src={basketDelete} alt="Закрыть" />
                    </button>
                </div>

                {/* Список товаров в корзине */}
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

                    {/* Итого для десктопа */}
                    {cartItems.length > 0 && (
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
                    )}
                </div>

                {/* Блок "С этим покупают" */}
                <div className={s.additional_product}>
                    <p className={s.related_product}>С этим покупают</p>

                    <div className={s.additional_product_list}>
                        {loadingRecommended ? (
                            <div className={s.loading}>Загрузка рекомендуемых товаров...</div>
                        ) : (
                            <ProductList
                                addToBasket={addToBasket}
                                products={recommendedProducts}
                            />
                        )}
                    </div>
                </div>

                {/* Итого для мобильной версии */}
                {cartItems.length > 0 && (
                    <div className={s.mobile_price_total}>
                        <h3 className={s.mobile_price_total_h}>
                            <p className={s.total_price}>Итого</p>
                            <div className={s.price}>${getTotalPrice().toFixed(2)}</div>
                        </h3>
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
    );
};

export default Basket;