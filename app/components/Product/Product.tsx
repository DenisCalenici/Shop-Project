// import React, { useState, useEffect } from 'react'
// import s from '../welcome/welcome.module.css'
// import ProductList from './ProductList'
// import type { IProductCard } from './ProductCard.type'


// const Product = () => {
//     const [products, setProducts] = useState<IProductCard[] | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
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

//     if (error) {
//         return <div>Ошибка: {error}</div>;
//     }
//     return (
//         <div>   <div className={s.catalog}>
//             <div className={s.block}>

//                 <button className={s.filter_button_1}>
//                     Сбросить фильтры
//                 </button>

//                 <button className={s.filter_button_2}>
//                     <p className={s.filter_p_2}> Популярности</p> <div className={s.filter_img_2}>	<img
//                         src="app/img/Vector_2.png"
//                     /></div>
//                 </button>
//             </div>
//             <div className={s.block_2}>
//                 <button className={s.filter_button_3}>
//                     Фильтр
//                 </button>
//                 <br />
//                 <button className={s.filter_button_4}>
//                     <p className={s.filter_p_4}> Популярности</p> <div className={s.filter_img_4}>	<img
//                         src="app/img/Vector_2.png"
//                     /></div>
//                 </button>
//             </div>
//             <div className={s.filter_block}>
//                 <div className={s.filter}></div>
//                 <div className={s.filter_product} >
//                     <div className={s.filter_product_cards}>
//                         <ProductList addToBasket={addToBasket} products={products || []} />
//                     </div>
//                     <div className={s.paginator_filter}>
//                         <a href='#'>&lt;</a>
//                         <a className={s.paginator_active} href='#'>1</a>
//                         <a href='#'>2</a>
//                         <a href='#'>3</a>
//                         <a href='#'>4</a>
//                         <a href='#'>5</a>
//                         <a href='#'>6</a>
//                         <a href='#'>7</a>
//                         <a href='#'>...</a>
//                         <a href='#'>15</a>
//                         <a href='#'>&gt;</a>
//                     </div>
//                     <div className={s.paginator_filter_mobile}>
//                         <a href='#'>&lt;</a>
//                         <a className={s.paginator_active_mobile} href='#'>1</a>
//                         <a href='#'>2</a>
//                         <a href='#'>3</a>
//                         <a href='#'>...</a>
//                         <a href='#'>15</a>
//                         <a href='#'>&gt;</a>
//                     </div>
//                 </div>
//             </div>
//         </div></div>
//     )
// }
// export default Product


import React, { useState, useEffect } from 'react'
import s from '../welcome/welcome.module.css'
import ProductList from './ProductList'
import type { IProductCard } from './ProductCard.type'

const Product = () => {
    const [products, setProducts] = useState<IProductCard[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Добавляем недостающую функцию
    const addToBasket = (product: IProductCard) => {
        // Реализуйте логику добавления в корзину
        console.log('Товар добавлен в корзину:', product);
    };

    // Добавляем обработчики для кнопок
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
                        <img src="/img/Vector_2.png" alt="Стрелка" />
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
                        <img src="/img/Vector_2.png" alt="Стрелка" />
                    </div>
                </button>
            </div>

            <div className={s.filter_block}>
                <div className={s.filter}>
                    {/* Здесь должен быть компонент фильтра */}
                </div>
                <div className={s.filter_product}>
                    <div className={s.filter_product_cards}>
                        <ProductList addToBasket={addToBasket} products={products || []} />
                    </div>

                    {/* Оставьте только одну версию пагинации */}
                    <div className={s.paginator_filter}>
                        <a href='#'>&lt;</a>
                        <a className={s.paginator_active} href='#'>1</a>
                        <a href='#'>2</a>
                        <a href='#'>3</a>
                        <a href='#'>4</a>
                        <a href='#'>5</a>
                        <a href='#'>6</a>
                        <a href='#'>7</a>
                        <a href='#'>...</a>
                        <a href='#'>15</a>
                        <a href='#'>&gt;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product