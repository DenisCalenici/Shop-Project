interface CheckoutFormProps {
    name: string;
    surname: string;
    email: string;
    age: number;
}
const CheckoutForm = () => {
    return (
        <div>
            <h1>1. Контактные данные</h1>
            <form >
                <div>
                    <h2>Фамилия</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Имя</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Телефон</h2>
                    <input type="number" />
                </div>
                <div>
                    <h2> E-mail</h2>
                    <input type="text" />
                </div>

            </form></div>
    )
}
export default CheckoutForm