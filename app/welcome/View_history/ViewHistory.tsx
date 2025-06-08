import React from 'react'
import s from 'app/welcome/welcome.module.css'
import ProductList from '~/Product/ProductList'
const ViewHistory = () => {
    return (
        <div className={s.viewing_history}>
            <div className={s.viewing_history_body}>
                <div className={s.viewing_history_text}>
                    Вы недавно просмотрели
                </div>
            </div>
            <div className={s.viewing_history_carts}>

                <ProductList />


            </div>
        </div>
    )
}
export default ViewHistory