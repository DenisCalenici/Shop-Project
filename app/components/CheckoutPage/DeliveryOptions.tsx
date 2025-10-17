import React from 'react'
import s from './CheckoutForm.module.css'
const DeliveryOptions = () => {
  return (

    <div>
      <h1 className={s.name_form_2}>2. Доставка</h1>

      <div className={s.delivery_container}>
        <label className={s.radio_label}>
          <div> <input type="radio" name="option" value="1" className={s.radio_input} />
            <span className={s.radio_custom}>Сдек</span></div>
          <div> <input type="radio" name="option" value="2" className={s.radio_input} />
            <span className={s.radio_custom}>Почта России</span>
          </div>
          <div><input type="radio" name="option" value="3" className={s.radio_input} />
            <span className={s.radio_custom}> Деловые линии</span></div>





        </label>
      </div>
    </div>
  )
}
export default DeliveryOptions