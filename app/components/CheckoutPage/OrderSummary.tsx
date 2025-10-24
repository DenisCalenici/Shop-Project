// OrderSummary.tsx
import s from './CheckoutForm.module.css';
import OrderCart from './OrderCart'; // новый компонент

const OrderSummary = () => {
    return (
        <div className={s.order_summary}>
            <div className={s.order_header}>
                <h2 className={s.order_body}>Итого</h2>
            </div>
            
            <div className={s.order_container}>
                <OrderCart /> {/* Используем новый компонент */}
            </div>
            
            <div className={s.order_footer}>
                {/* Дополнительная информация о заказе */}
            </div>
        </div>
    );
};

export default OrderSummary;