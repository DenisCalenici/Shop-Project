import React, { useState, useEffect } from 'react';
import s from '../welcome.module.css';
import type { IProductCard } from '~/components/Product/ProductCard.type';

interface PopularCombosProps {
    isOpen: boolean;
    addToBasket: (product: IProductCard) => void;
}

const PopularCombos: React.FC<PopularCombosProps> = ({ isOpen, addToBasket }) => {
    const [recommendedProducts, setRecommendedProducts] = useState<IProductCard[]>([]);
    const [loadingRecommended, setLoadingRecommended] = useState<boolean>(true);

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
                const randomProducts = getRandomProducts(data, 4); // Меньше товаров для лучшего вида
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

    return (
        <div className={s.additional_product}>
            <p className={s.related_product}>С этим покупают</p>

            <div className={s.additional_product_list}>
                {loadingRecommended ? (
                    <div className={s.loading}>Загрузка рекомендуемых товаров...</div>
                ) : (
                    <div className={s.basket_product_list}>
                        {recommendedProducts.map(product => (
                            <div key={product.id} className={s.recommended_product_card}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className={s.recommended_product_image}
                                />
                                <h4 className={s.recommended_product_title}>{product.title}</h4>
                                <p className={s.recommended_product_price}>${product.price}</p>
                                <button
                                    className={s.recommended_add_button}
                                    onClick={() => addToBasket(product)}
                                >
                                    Добавить
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PopularCombos;