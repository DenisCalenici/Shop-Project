import { useState, useEffect } from 'react';
import s from '../welcome.module.css';
import ProductList from '~/components/Product/ProductList';
import type { IProductCard } from '~/components/Product/ProductCard.type';
const temporaryСards = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
},
{
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
}]
const ViewHistory = () => {

    const [viewHistory, setViewHistory] = useState<IProductCard[]>(temporaryСards);

    const addToHistory = (product: IProductCard) => {
        if (!viewHistory.some(p => p.id === product.id)) {
            const newHistory = [product, ...viewHistory];
            setViewHistory(newHistory);
            localStorage.setItem('viewHistory', JSON.stringify(newHistory));
        }
    };
    console.log(viewHistory)

    return (
        <div className={s.viewing_history}>
            <div className={s.viewing_history_body}>
                <></>
                <div className={s.viewing_history_text}>
                    Вы недавно просмотрели
                </div>
            </div>

            {viewHistory.length > 0 ? (
                <div className={s.viewing_history_carts}>
                    <ProductList
                        products={viewHistory}
                        onProductClick={addToHistory}
                        addToBasket={(product) => { console.log(product) }}
                    />
                </div>
            ) : (
                <div className={s.no_products}>
                    Нет просмотренных товаров
                </div>
            )}

            
        </div>
    );
};

export default ViewHistory;
