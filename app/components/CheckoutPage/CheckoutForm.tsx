import s from './CheckoutForm.module.css'
import Layout from "../Layout/Layout";
import DeliveryOptions from './DeliveryOptions'
import PaymentMethods from './PaymentMethods'
import OrderSummary from './OrderSummary';
interface CheckoutFormProps {
    name: string;
    surname: string;
    email: string;
    age: number;
}
const CheckoutForm = () => {
    return (
        <Layout title="title">
            <div className={s.body_form_container} >


                <div className={s.name_form_body} >
                    <h1 className={s.name_form_h1}>Оформление заказа </h1>
                    <div className={s.name_form_body_container} >

                        <h2 className={s.name_form_2}>1. Контактные данные</h2>
                        <form className={s.form_container}  >
                            <div className={s.input_container}>
                                <h2 className={s.name_form}>Фамилия</h2>
                                <input className={s.input_form} type="text" placeholder="Фамилия" />
                            </div>
                            <div>
                                <h2 className={s.name_form}>Имя</h2>
                                <input className={s.input_form} type="text"  placeholder="Имя"/>
                            </div>
                            <div>
                                <h2 className={s.name_form}>Телефон</h2>
                                <input className={s.input_form} type="tel" placeholder="+7 (___) ___ __ __" />
                            </div>
                            <div>
                                <h2 className={s.name_form}> E-mail</h2>
                                <input className={s.input_form} type="text" placeholder="example@mail.ru" />
                            </div>

                        </form>
                        <DeliveryOptions />
                        <PaymentMethods />
                    </div></div>
                <div className={s.name_form_body} >
                    <OrderSummary />
                </div>
            </div>
        </Layout>
    )
}
export default CheckoutForm