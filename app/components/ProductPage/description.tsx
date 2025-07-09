import s from "./productSpecs.module.css"

const Description = () => {
    return (
        <div className={s.container_description}>

            <div className={s.description_1}>  <table >
                <tbody>
                    <tr>
                        <td>Память на количество карт</td>
                        <td>2033</td>
                    </tr>
                    <tr>
                        <td>Приложение</td>
                        <td>Нет</td>
                    </tr>
                    <tr>
                        <td>Материал</td>
                        <td>Сталь, силиконовые вставки</td>
                    </tr>
                    <tr>
                        <td>Цвет</td>
                        <td>Черный, хром</td>
                    </tr>
                    <tr>
                        <td>Питание</td>
                        <td>DC 6V, 4 AAA</td>
                    </tr>
                    <tr>
                        <td>Разблокировка</td>
                        <td>Пин-код, карта или браслет Mifaire, ключ, приложение, отпечаток пальца</td>
                    </tr>
                </tbody>
            </table></div>

            <div className={s.description_1}> <table >
                <tbody>
                    <tr>
                        <td>Тип двери</td>
                        <td>Деревянная, металлическая</td>
                    </tr>
                    <tr>
                        <td>Толщина двери</td>
                        <td>38-55 мм</td>
                    </tr>
                    <tr>
                        <td>Размеры</td>
                        <td>302мм * 43мм * 22.55мм</td>
                    </tr>
                    <tr>
                        <td>Вес</td>
                        <td>2.5 кг</td>
                    </tr>
                    <tr>
                        <td>Комплектация</td>
                        <td>Без мартизы, с мартизой</td>
                    </tr>
                </tbody>
            </table></div>
        </div>


    );
};
export default Description