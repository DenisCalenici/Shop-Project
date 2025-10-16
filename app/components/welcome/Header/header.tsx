import { useState } from 'react'
import { Link } from "react-router";
import s from '../welcome.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Basket from '../Basket/basket'
import logo_one from '../../../img/Logo_1.svg'
import Vector from '../../../img/Vector.png'
import Frame from '../../../img/Frame.png'
import CartCounter from '../Counter/CartCounter'


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

                        <Link to="/"><img src={logo_one} alt="Логотип" />  </Link>
                    </div>
                    <div className={s.header_ul}>

                        <Link to="/" className={s.header_a}>Главная</Link>
                        <Link to="/catalog" className={s.header_a}>Каталог</Link>
                        <Link to="/wholesale" className={s.header_a}>Оптовая продажа</Link>
                        <Link to="/about" className={s.header_a}>О нас</Link>
                    </div>
                    <div className={s.header_contacts}>
                        <a href="tel:+79665588499" className={s.header_contacts_a}>+7 (966) 55 88 499</a>
                        <div className={s.header_contacts_img}>
                            <img className={s.img_icons_header} src={Vector} alt="Иконка 1" />
                            <div className={s.cartIconWrapper}>
                                <img
                                    className={s.img_icons_header}
                                    src={Frame}
                                    alt="Корзина"
                                    onClick={toggleBasket}
                                />
                                <CartCounter onCartClick={toggleBasket} className={s.headerCartCounter} />
                            </div>
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
                                    <Link to="/" className={s.box_a}>Главная</Link>
                                </li>
                                <li className={s.box_li}>
                                    <Link to="/catalog" className={s.box_a}>Каталог</Link>
                                </li>
                                <li className={s.box_li}>
                                    <Link to="/wholesale" className={s.box_a}>Оптовая продажа</Link>
                                </li>
                                <li className={s.box_li}>
                                    <Link to="/about" className={s.box_a}>О нас</Link>
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
                                    <a className={s.box_namber_a}>Обратный звонок</a>
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
                            <img className={s.box_img} src={Vector} alt="Иконка 1" />
                            <div className={s.cartIconWrapper}>
                                <img
                                    className={s.box_img}
                                    src={Frame}
                                    alt="Корзина"
                                    onClick={toggleBasket}
                                />
                                <CartCounter onCartClick={toggleBasket} className={s.burgerCartCounter} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header