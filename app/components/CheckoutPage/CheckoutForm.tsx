import s from './CheckoutForm.module.css'
import Layout from "../Layout/Layout";
import DeliveryOptions from './DeliveryOptions'
import PaymentMethods from './PaymentMethods'
import OrderSummary from './OrderSummary';
import { useState } from 'react';
import { useCart } from '../welcome/Context/CartContext';
interface CheckoutFormProps {
    surname: string;
    name: string;
    email: string;
    delivery: string;
    payment: string;
    software: string;
    phone?: number | null;
}

const CheckoutForm = () => {
    const { cartItems } = useCart();
    const [formState, setFormState] = useState<CheckoutFormProps>({
        surname: 'QWe',
        name: '',
        email: '',
        delivery: '',
        payment: '',
        software: '',
        phone: null,
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormState((prevState) => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = () => {

        console.log('data', formState)
        console.log('cartItems', cartItems)
    }


    return (
       
            <div className={s.body_form_container} >


                <div className={s.name_form_body} >
                    <h1 className={s.name_form_h1}>Оформление заказа </h1>
                    <div className={s.name_form_body_container} >

                        <h2 className={s.name_form_2}>1. Контактные данные</h2>
                        <form className={s.form_container}  >
                            <div className={s.input_container}>
                                <h2 className={s.name_form}>Фамилия</h2>
                                <input className={s.input_form} type="text" placeholder="Фамилия" name='surname' value={formState.surname}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <h2 className={s.name_form}>Имя</h2>
                                <input className={s.input_form} type="text" placeholder="Имя" name='name' value={formState.name}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <h2 className={s.name_form}>Телефон</h2>
                                <input className={s.input_form} type="phone" placeholder="+7 (___) ___ __ __" name='phone' value={formState.phone || undefined}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <h2 className={s.name_form}> E-mail</h2>
                                <input className={s.input_form} type="email" placeholder="example@mail.ru" name='email' value={formState.email}
                                    onChange={handleChange} />
                            </div>

                        </form>
                        <DeliveryOptions onInputChange={handleChange} delivery={formState.delivery} />
                        <PaymentMethods onInputChange={handleChange} payment={formState.payment} />
                    </div></div>
                <div className={s.name_form_body} >
                    <OrderSummary onSubmit={handleSubmit} onInputChange={handleChange} />
                </div>
            </div>
   
    )
}
export default CheckoutForm