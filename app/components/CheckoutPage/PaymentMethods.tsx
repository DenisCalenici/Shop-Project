import React from 'react'
import s from './CheckoutForm.module.css'
const PaymentMethods = () => {
    return (
        <div>
            <div>
                <h1 className={s.name_form_2}>3. Оплата</h1>

                <div className={s.paument_container}>
                    <label className={s.radio_label_payment}>
                        <div className={s.input_container}>
                            <input type="radio" name="option" value="1" className={s.radio_input} />
                            <span className={s.radio_paument}>Оплата при получении товара</span>
                        </div>
                        <div className={s.input_container}>
                            <input type="radio" name="option" value="2" className={s.radio_input} />
                            <span className={s.radio_paument}>Банковская карта</span>
                        </div>

                    </label>
                </div>
            </div></div>
    )
}
export default PaymentMethods