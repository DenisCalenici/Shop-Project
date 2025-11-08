import CheckoutForm from '~/components/CheckoutPage/CheckoutForm';
import s from '../components/welcome/welcome.module.css'
import Layout from '~/components/Layout/Layout';
export default function Forms() {
    return (
        <div >

            <Layout title="Форма">
                <CheckoutForm />
            </Layout>
        </div>
    );
}