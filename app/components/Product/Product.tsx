
import { useState, useEffect } from 'react'
import { Link } from "react-router";
import s from '../welcome/welcome.module.css'
import ProductList from './ProductList'
import type { IProductCard } from './ProductCard.type'
import arrow from '../../img/Vector_2.png'
import FilterProduct from '../Filter/FilterProduct';
import { useProductFilter } from '../Hooks/useProductFilter';

const Product = () => {
    const [products, setProducts] = useState<IProductCard[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showFilters, setShowFilters] = useState(false);

    const {
        filters,
        filteredProducts,
        categories,
        updateCategory,
        updatePriceRange,
        updateSearchQuery,
        updateSortBy,
        resetFilters,
    } = useProductFilter(products || []);

    const addToBasket = (product: IProductCard) => {
        console.log('Товар добавлен в корзину:', product);
    };

    const handleResetFilters = () => {
        resetFilters();
        console.log('Фильтры сброшены');
    };

    const handleSortByPopularity = () => {

        const sortOptions: Array<'popularity' | 'price-low' | 'price-high' | 'rating'> =
            ['popularity', 'price-low', 'price-high', 'rating'];
        const currentIndex = sortOptions.indexOf(filters.sortBy);
        const nextIndex = (currentIndex + 1) % sortOptions.length;
        updateSortBy(sortOptions[nextIndex]);
    };

    const handleApplyFilter = () => {
        setShowFilters(!showFilters);
    };

    const getSortButtonText = () => {
        switch (filters.sortBy) {
            case 'price-low': return 'Цена (низкая)';
            case 'price-high': return 'Цена (высокая)';
            case 'rating': return 'Рейтингу';
            case 'popularity':
            default: return 'Популярности';
        }
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
                    <p className={s.filter_p_2}>{getSortButtonText()}</p>
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
                    <p className={s.filter_p_4}>{getSortButtonText()}</p>
                    <div className={s.filter_img_4}>
                        <img src={arrow} alt="Стрелка" />
                    </div>
                </button>
            </div>

            <div className={s.filter_block}>
                <div className={`${s.filter} ${showFilters ? s.filter_mobile_show : ''}`}>
                    <FilterProduct
                        filters={filters}
                        categories={categories}
                        onCategoryChange={updateCategory}
                        onPriceRangeChange={updatePriceRange}
                        onSearchChange={updateSearchQuery}
                        onReset={resetFilters}
                        onClose={() => setShowFilters(false)}
                    />
                </div>
                <div className={s.filter_product}>
                    <div className={s.filter_product_cards}>
                        <ProductList
                            addToBasket={addToBasket}
                            products={filteredProducts}
                        />
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