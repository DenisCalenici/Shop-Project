import { useState, useEffect } from 'react'
import { Link } from "react-router"; 
import s from '../welcome/welcome.module.css'
import ProductList from './ProductList'
import type { IProductCard } from './ProductCard.type'
import arrow from '../../img/Vector_2.png'

const Product = () => {
    const [products, setProducts] = useState<IProductCard[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const addToBasket = (product: IProductCard) => {
        console.log('Товар добавлен в корзину:', product);
    };

    const handleResetFilters = () => {
        console.log('Фильтры сброшены');
    };

    const handleSortByPopularity = () => {
        console.log('Сортировка по популярности');
    };

    const handleApplyFilter = () => {
        console.log('Применить фильтр');
    };

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
        <div className={s.catalog}>
            <div className={s.block}>
                <button className={s.filter_button_1} onClick={handleResetFilters}>
                    Сбросить фильтры
                </button>
                <button className={s.filter_button_2} onClick={handleSortByPopularity}>
                    <p className={s.filter_p_2}>Популярности</p>
                    <div className={s.filter_img_2}>
                        <img src={arrow} alt="Стрелка" />
                    </div>
                </button>
            </div>

            <div className={s.block_2}>
                <button className={s.filter_button_3} onClick={handleApplyFilter}>
                    Фильтр
                </button>
                <br />
                <button className={s.filter_button_4} onClick={handleSortByPopularity}>
                    <p className={s.filter_p_4}>Популярности</p>
                    <div className={s.filter_img_4}>
                        <img src={arrow} alt="Стрелка" />
                    </div>
                </button>
            </div>

            <div className={s.filter_block}>
                <div className={s.filter}>

                </div>
                <div className={s.filter_product}>
                    <div className={s.filter_product_cards}>
                        <ProductList addToBasket={addToBasket} products={products || []} />
                    </div>

                   
                    <div className={s.paginator_filter}>
                        <Link to="#" onClick={(e) => e.preventDefault()}>&lt;</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()} className={s.paginator_active}>1</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>2</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>3</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>4</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>5</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>6</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>7</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>...</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>15</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>&gt;</Link>
                    </div>
                    
           
                    <div className={s.paginator_filter_mobile}>
                        <Link to="#" onClick={(e) => e.preventDefault()}>&lt;</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()} className={s.paginator_active_mobile}>1</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>2</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>3</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>...</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>15</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()}>&gt;</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product