import React from 'react'
import s from 'app/welcome/welcome.module.css'
import ProductList from '~/Product/ProductList'
import ViewHistory from '../View_history/ViewHistory'
import CeoProduct from '../Ceo_product/CeoProduct'
import Product from '~/Product/Product'
const Container = () => {
    return (
        <div className={s.body_container}>
            <div className={s.text_h1}>
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
            </div>
            <Product />
            <ViewHistory />
            <CeoProduct />

        </div >
    )
}
export default Container