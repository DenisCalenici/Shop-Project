import React, { useState, useEffect } from 'react'
import s from '../welcome/welcome.module.css'
import ProductList from './ProductList'

const Product = () => {

    return (
        <div>   <div className={s.catalog}>
            <div className={s.block}>
                <button className={s.filter_button_1}>
                    Сбросить фильтры
                </button>
                <button className={s.filter_button_2}>
                    <p className={s.filter_p_2}> Популярности</p> <div className={s.filter_img_2}>	<img
                        src="app/img/Vector_2.png"
                    /></div>
                </button>
            </div>
            <div className={s.block_2}>
                <button className={s.filter_button_3}>
                    Фильтр
                </button>
                <br />
                <button className={s.filter_button_4}>
                    <p className={s.filter_p_4}> Популярности</p> <div className={s.filter_img_4}>	<img
                        src="app/img/Vector_2.png"
                    /></div>
                </button>
            </div>
            <div className={s.filter_block}>
                <div className={s.filter}></div>
                <div className={s.filter_product} >
                    <div className={s.filter_product_cards}>
                        <ProductList />
                    </div>
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
                    <div className={s.paginator_filter_mobile}>
                        <a href='#'>&lt;</a>
                        <a className={s.paginator_active_mobile} href='#'>1</a>
                        <a href='#'>2</a>
                        <a href='#'>3</a>
                        <a href='#'>...</a>
                        <a href='#'>15</a>
                        <a href='#'>&gt;</a>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
export default Product