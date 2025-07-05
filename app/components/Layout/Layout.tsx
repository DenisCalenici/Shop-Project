
import type { ReactNode } from 'react';
import s from '../welcome/welcome.module.css'
import Header from '../welcome/Header/header'
import Footer from '../welcome/Footer/footer'



interface ModalProps {
    title: string;
    children: ReactNode;
}
export default function Layout(props: ModalProps) {

    return (
        <div className={s.body}>
            <Header />
            {props.children}
            <Footer />
        </div >
    )
}


