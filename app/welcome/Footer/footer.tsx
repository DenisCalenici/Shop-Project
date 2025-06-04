import React from 'react'
import s from 'app/welcome/welcome.module.css'
const Footer = () => {
    return (
        <div> <div className={s.footer_body}>
            <div className={s.footer}>
                <div className={s.footer_logo}>
                    <img
                        className={s.footer_logo_img}
                        src="app/img/Logo (5).png"
                    />
                    <img
                        className={s.footer_logo_img_2}
                        src="app/img/Frame 4075216.png"
                    />
                </div>
                <div className={s.footer_ul}>
                    <ul className={s.footer_ul_ul}>
                        <h1 className={s.footer_ul_h1}>Навигация</h1>
                        <br />
                        <a className={s.footer_ul_a} href="#">
                            Главная
                        </a>
                        <br />
                        <a className={s.footer_ul_a} href="#">
                            Каталог
                        </a>
                        <br />
                        <a className={s.footer_ul_a} href="#">
                            Оптовая продажа
                        </a>
                        <br />
                        <a className={s.footer_ul_a} href="#">
                            О нас
                        </a>
                    </ul>
                    <ul className={s.footer_ul_ul}>
                        <h1 className={s.footer_ul_h1}>
                            Наши контакты
                        </h1>
                        <br />
                        <h1 className={s.footer_ul_p}>Телефоны</h1>
                        <a className={s.footer_ul_a} href="#">
                            +7 (988) 565 00 38
                        </a>
                        <br />
                        <a className={s.footer_ul_a} href="#">
                            +375 33 662 82 56
                        </a>
                        <h1 className={s.footer_ul_p}>Email</h1>
                        <a className={s.footer_ul_a} href="#">
                            vladpertcev@mail.ru
                        </a>
                        <br />
                        <a className={s.footer_ul_a} href="#">
                            korobko416@gmail.com
                        </a>
                    </ul>
                    <ul className={s.footer_ul_ul}>
                        <h1 className={s.footer_ul_h3}>Информация</h1>
                        <h1 className={s.footer_ul_h2}>Другое</h1>
                        <br />
                        <a className={s.footer_ul_a} href="#">
                            Доставка и оплата
                        </a>
                        <br />
                        <a className={s.footer_ul_a} href="#">
                            Гарантии
                        </a>
                        <br />
                        <a className={s.footer_ul_a} href="#">
                            Возврат товара
                        </a>
                    </ul>
                    <ul className={s.footer_ul_ul}>
                        <h1 className={s.footer_ul_h1}>Наш адрес</h1>
                        <br />
                        <a className={s.footer_ul_a} href="#">
                            Россия, Ростов-на-Дону ул. Богачева, 16
                        </a>
                        <br />
                        <a className={s.footer_ul_a} href="#">
                            Беларусь, Солигорск ул. Ленина, 10б
                        </a>
                    </ul>
                </div>
            </div>
            <div className={s.footer_end}>
                <p className={s.footer_end_p}>
                    © 2021 Golden Soft All rights reserved.
                </p>
            </div>
        </div></div>
    )
}
export default Footer