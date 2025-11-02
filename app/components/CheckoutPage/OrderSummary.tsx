import s from './CheckoutForm.module.css';
import OrderCart from './OrderCart';

type OrderSummaryProps = {
    onSubmit: () => void;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OrderSummary = ({ onSubmit, onInputChange }: OrderSummaryProps) => {
    return (
        <div className={s.order_summary}>
            <div className={s.order_header}>
                <h2 className={s.order_body}>Итого</h2>
            </div>

            <div className={s.order_container}>
                <OrderCart />
            </div>
            <div className={s.container_equipment}>
                <h1 className={s.equipment_name}>Комплектация</h1>
                <div>
                    <div className={s.installation_container}>
                        <input 
                            type="checkbox" 
                            className={s.installation} 
                            name='software' 
                            value='1' 
                            onChange={onInputChange} 
                        />
                        <span className={s.radio_custom}> Нужна установка</span>
                    </div>
                    <div className={s.software_container}>
                        <input 
                            type="checkbox" 
                            className={s.software} 
                            value='2' 
                            name='software' 
                            onChange={onInputChange} 
                        />
                        <span className={s.radio_custom}> Настройка софта</span>
                    </div>
                </div>
            </div>
            <div className={s.button_installation_container}>
                <button className={s.button_installation} onClick={() => onSubmit()}>
                    Подтвердить заказ
                </button>
            </div>
            <div className={s.order_promo_code}>
                <span className={s.order_span}>Промокод</span>
                <button className={s.order_button}>Добавить</button>
            </div>
            <div className={s.order_footer}>
                <h3 className={s.order_footer_h3}>
                    Оформляя заказ, я принимаю условия
                    <a className={s.order_footer_a}>пользовательского соглашения</a>
                </h3>
            </div>
        </div>
    );
};

export default OrderSummary;