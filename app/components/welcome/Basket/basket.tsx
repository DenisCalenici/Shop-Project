import { useState } from 'react';
import s from '../welcome.module.css';
import basketDelete from "./img/basket_delete.png"


interface BasketProps {
    isOpen: boolean;
    onClose: () => void;
}


const Basket: React.FC<BasketProps> = ({ isOpen, onClose }) => {

    return isOpen ? (
        <div className={s.basket_container}>
            <div className={s.basketOpen}>
                <div className={s.header_basketOpen}>
                    <h1 className={s.basket_title}>Корзина</h1>


                    <button
                        className={s.basket_button}
                        onClick={onClose}
                    >
                        <img
                            className={s.basket_img}
                            src={basketDelete}
                        />
                    </button>
                </div>
                <div className={s.shopping_list}>card</div>
                <div className={s.additional_product}>card</div>
            </div>
        </div>
    ) : null;
};

export default Basket;
