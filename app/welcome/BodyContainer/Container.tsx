import React from 'react'
import s from 'app/welcome/welcome.module.css'
import ProductList from '~/ProductСart/ProductList'
import ViewHistory from '../View_history/ViewHistory'
import CeoProduct from '../Ceo_product/CeoProduct'
const Container = () => {
    return (
        <div className={s.body_container}>
            <h1 className={s.text_h1}>
                <div className={s.text_a}>
                    <a href="#" className={s.text_a_1}>
                        Главная
                    </a>
                    <img
                        className={s.text_a_2}
                        src="app/img/Vector12.png"
                    />
                    <a href="#" className={s.text_a_3}>
                        / Каталог
                    </a>
                </div>
                <p className={s.text_h3}>
                    Накладные электронные замки
                    <span className={s.text_p3}>(854)</span>
                </p>
            </h1>
            <div className={s.catalog}>
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
                            {/* <ProductList /> */}
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
            </div>
            <ViewHistory />
            <CeoProduct />

        </div >
    )
}
export default Container