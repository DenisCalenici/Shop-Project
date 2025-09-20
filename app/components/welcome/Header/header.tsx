import { useState } from 'react'
import s from '../welcome.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Basket from '../Basket/basket'
import logo_one from '../../../img/Logo_1.svg'
import Vector from '../../../img/Vector.png'
import Frame from '../../../img/Frame.png'

const Header = () => {
    const [nav, setNav] = useState(false);
    const [basketOpen, setBasketOpen] = useState(false);

    const toggleBasket = () => {
        setBasketOpen(prevState => !prevState);
    };

    return (
        <div className={s.header}>
            <div className={s.header_advertisement_container}>
                <div className={s.header_advertisement}>
                    <div className={s.header_advertisement_discount}>
                        Скидка 10% по промокоду "ZAMOK" на все заказы до 10.09
                    </div>
                    <a className={s.header_advertisement_a}>Обратный звонок</a>
                </div>
            </div>

            <div className={s.header_container_container}>
                <div className={s.header_container}>
                    <div className={s.header_logo}>
                        <img src={logo_one} alt="Логотип" />
                    </div>
                    <div className={s.header_ul}>
                        <a href="#" className={s.header_a}>Главная</a>
                        <a href="#" className={s.header_a}>Каталог</a>
                        <a href="#" className={s.header_a}>Оптовая продажа</a>
                        <a href="#" className={s.header_a}>О нас</a>
                    </div>
                    <div className={s.header_contacts}>
                        <a href="#" className={s.header_contacts_a}>+7 (966) 55 88 499</a>
                        <div className={s.header_contacts_img}>
                            <img className={s.img_icons_header} src={Vector} alt="Иконка 1" />
                            <img
                                className={s.img_icons_header}
                                src={Frame}
                                alt="Иконка 2"
                                onClick={toggleBasket}

                            />
                        </div>
                    </div>
                </div>
            </div>


            <Basket
                isOpen={basketOpen}
                onClose={toggleBasket}
            />

            <header className={s.burger_header}>
                <div className={s.container}>
                    <div className={s.box}>
                        <div
                            className={
                                nav ? [s.box_ul, s.active].join(' ') : s.box_ul
                            }
                        >
                            <ul className={s.box_ul_ul}>
                                <li className={s.box_li}>
                                    <a className={s.box_a} href="#">Главная</a>
                                </li>
                                <li className={s.box_li}>
                                    <a className={s.box_a} href="#">Каталог</a>
                                </li>
                                <li className={s.box_li}>
                                    <a className={s.box_a} href="#">Оптовая продажа</a>
                                </li>
                                <li className={s.box_li}>
                                    <a className={s.box_a} href="#">О нас</a>
                                </li>
                            </ul>
                            <div className={s.box_namber}>
                                <span className={s.box_namber_span}>
                                    <img
                                        className={s.box_namber_img}
                                        src="app/img/phone-call 1.png"
                                        alt="Телефон"
                                    /> +7 (966) 55 88 499
                                </span>
                                <span>
                                    <a className={s.box_namber_a} href="#">Обратный звонок</a>
                                </span>
                            </div>
                        </div>
                        <div onClick={() => setNav(!nav)} className={s.mobile_btn}>
                            {nav ? (
                                <AiOutlineClose size={24} />
                            ) : (
                                <AiOutlineMenu size={24} />
                            )}
                        </div>
                        <div className={s.box_logo_img}>
                            <img className={s.box_img} src="app/img/Vector.png" alt="Иконка 1" />
                            <img
                                className={s.box_img}
                                src="app/img/Frame.png"
                                alt="Иконка 2"
                                onClick={toggleBasket}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header