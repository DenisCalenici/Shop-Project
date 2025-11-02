import React from 'react'
import s from './CheckoutForm.module.css'
type PaymentMethodsProps = { onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void, payment: string | undefined }
const PaymentMethods = ({ onInputChange, payment }:  (PaymentMethodsProps) ) => {
    return (
        <div>
            <div>
                <h1 className={s.name_form_2}>3. Оплата</h1>

                <div className={s.payment_container}>
                    <label className={s.radio_label_payment}>
                        <div className={s.input_container}>
                            <input type="radio" checked={payment === '1'} name="payment" value="1" className={s.radio_input} onChange={onInputChange} />
                            <span className={s.radio_payment}>Оплата при получении товара</span>
                        </div>


                    </label>
                    <label className={s.radio_label_payment}>

                        <div className={s.input_container}>
                            <input type="radio" checked={payment === '2'} name="payment" value="2" className={s.radio_input} onChange={onInputChange} />
                            <span className={s.radio_payment}>Банковская карта</span>
                        </div>

                    </label>
                </div>
            </div></div>
    )
}
export default PaymentMethods