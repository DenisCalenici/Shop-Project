import s from './CheckoutForm.module.css'
import Layout from "../Layout/Layout";
import DeliveryOptions from './DeliveryOptions'
interface CheckoutFormProps {
    name: string;
    surname: string;
    email: string;
    age: number;
}
const CheckoutForm = () => {
    return (
        <Layout title="title">
            <div className={s.name_form_body} >

                <h1 className={s.name_form_h1}>Оформление заказа </h1>
                <h2 className={s.name_form_2}>1. Контактные данные</h2>
                <form className={s.form_container}  >
                    <div className={s.input_container}>
                        <h2 className={s.name_form}>Фамилия</h2>
                        <input className={s.input_form} type="text" value="Фамилия" />
                    </div>
                    <div>
                        <h2 className={s.name_form}>Имя</h2>
                        <input className={s.input_form} type="text" value="Имя" />
                    </div>
                    <div>
                        <h2 className={s.name_form}>Телефон</h2>
                        <input className={s.input_form} type="tel" value="+7 (___) ___ __ __" />
                    </div>
                    <div>
                        <h2 className={s.name_form}> E-mail</h2>
                        <input className={s.input_form} type="text" value="example@mail.ru" />
                    </div>

                </form>
                <DeliveryOptions />
            </div>  <button
                onClick={() => window.history.back()}
                className={s.forms_button_return}

            >
                Вернуться в магазин
            </button></Layout>
    )
}
export default CheckoutForm