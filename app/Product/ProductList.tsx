import React, { useState, useEffect } from 'react';
import s from '../welcome/welcome.module.css'
import ProductCard from './ProductCard';
import type { IProductCard } from './ProductCard.type';






const ProductList: React.FC = () => {
    const [products, setProducts] = useState<IProductCard[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка при загрузке данных: ${response.status}`)
                }
                return response.json()
            })
            .then((data: IProductCard[]) => {
                setProducts(data)
                setLoading(false)
            })
            .catch((err: any) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])


    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <>
            {products && products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    );
};

export default ProductList;