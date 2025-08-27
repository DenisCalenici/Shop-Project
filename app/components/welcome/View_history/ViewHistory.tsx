import { useState, useEffect } from 'react';
import s from '../welcome.module.css';
import ProductList from '~/components/Product/ProductList';
import type { IProductCard } from '~/components/Product/ProductCard.type';

const ViewHistory = () => {
    const [viewHistory, setViewHistory] = useState<IProductCard[]>([]);

    const addToHistory = (product: IProductCard) => {
        if (!viewHistory.some(p => p.id === product.id)) {
            const newHistory = [product, ...viewHistory];
            setViewHistory(newHistory.slice(0, 5));
        }
    };

    useEffect(() => {
        try {
            if (viewHistory.length > 0) {
                localStorage.setItem('viewHistory', JSON.stringify(viewHistory));
            }
        } catch (error) {
            console.error('Ошибка при сохранении истории просмотров', error);
        }
    }, [viewHistory]);

    useEffect(() => {
        const savedHistory = localStorage.getItem('viewHistory');
        if (savedHistory) {
            try {
                const parsedHistory = JSON.parse(savedHistory);
                if (
                    Array.isArray(parsedHistory) &&
                    parsedHistory.every(
                        (item: any) =>
                            typeof item.id === 'number' &&
                            typeof item.title === 'string' &&
                            typeof item.image === 'string'
                    )
                ) {
                    setViewHistory(parsedHistory);
                }
            } catch (error) {
                console.error('Ошибка при загрузке истории просмотров', error);
            }
        }
    }, []);

    return (
        <div className={s.viewing_history}>
            <div className={s.viewing_history_body}>
                <div className={s.viewing_history_text}>
                    Вы недавно просмотрели
                </div>
            </div>

            {viewHistory.length > 0 ? (
                <div className={s.viewing_history_carts}>
                    <ProductList
                        products={viewHistory}
                        onProductClick={addToHistory}
                    />
                </div>
            ) : (
                <div className={s.no_products}>
                    Нет просмотренных товаров
                </div>
            )}

            <div style={{ color: 'red', fontSize: '14px' }}>
                Количество товаров в истории: {viewHistory.length}
            </div>
        </div>
    );
};

export default ViewHistory;
