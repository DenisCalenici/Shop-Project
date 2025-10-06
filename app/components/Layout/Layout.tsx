import type { ReactNode } from 'react';
import s from '../welcome/welcome.module.css'
import Header from '../welcome/Header/header'
import Footer from '../welcome/Footer/footer'
import { CartProvider } from '../welcome/Context/CartContext'; 

interface LayoutProps {
    title: string;
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <CartProvider> 
            <div className={s.body}>
                <Header />
                {props.children}
                <Footer />
            </div>
        </CartProvider>
    )
}