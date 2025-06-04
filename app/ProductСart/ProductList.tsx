import React, { useState, useEffect } from 'react';
import s from '../welcome/welcome.module.css'



interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка при загрузке данных: ${response.status}`);
                }
                return response.json();
            })
            .then((data: Product[]) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err: any) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <>
            {products && products.map((product) => (
                <div className={s.product_cards} key={product.id} >
                    <h2 >{product.title}</h2>
                    <img src={product.image} className={s.filter_castle_img} alt={product.title} />
                    <p className={s.price_current_price} >Цена: ${product.price}</p>
                    <p>{product.description}</p>
                    <p>Категория: {product.category}</p>
                    <p>Рейтинг: {product.rating.rate} ({product.rating.count} отзывов)</p>
                </div>
            ))}
        </>
    );
};

export default ProductList;