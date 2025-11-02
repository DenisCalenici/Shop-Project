import React from 'react'
import s from './CheckoutForm.module.css'
type DeliveryOptionsProps = { onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void, delivery: string | undefined }
const DeliveryOptions = ({ onInputChange, delivery }: (DeliveryOptionsProps)) => {
  return (

    <div>
      <h1 className={s.name_form_2}>2. Доставка</h1>

      <div className={s.delivery_container}>
        <label className={s.radio_label}>
          <div> <input type="radio" checked={delivery === '1'} name="delivery" value="1" className={s.radio_input}
            onChange={onInputChange} />
            <span className={s.radio_custom}>Сдек</span></div>






        </label>
        <label className={s.radio_label}>

          <div> <input type="radio" checked={delivery === '2'} name="delivery" value="2" className={s.radio_input}
            onChange={onInputChange} />
            <span className={s.radio_custom}>Почта России</span>
          </div>





        </label> <label className={s.radio_label}>
          <div><input type="radio" checked={delivery === '3'} name="delivery" value="3" className={s.radio_input}
            onChange={onInputChange} />
            <span className={s.radio_custom}> Деловые линии</span></div>
        </label>
      </div>
    </div>
  )
}
export default DeliveryOptions