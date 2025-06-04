import React from 'react'
import s from 'app/welcome/welcome.module.css'
const UlContainer = () => {
    return (
        <div className={s.ul_container} >
            <div className={s.ul}>
                <h3 className={s.ul_h3}>Мы Вам перезвоним</h3>
                <p className={s.ul_text}>
                    Если у вас возникли какие-то вопросы или проблемы,
                    заполните форму и мы Вам перезвоним.
                </p>
                <div className={s.ul_forms}>
                    <input
                        placeholder="Ваше имя"
                        className={s.ul_input}
                        type="text"
                    ></input>
                    <input
                        placeholder=" Ваш Email"
                        className={s.ul_input}
                        type="text"
                    ></input>
                    <button className={s.ul_button}>Отправить</button>
                </div>
            </div>
        </div>
    )
}
export default UlContainer