import { useParams } from 'react-router-dom';
import type { IProductCard } from '../Product/ProductCard.type';
import { useState, useEffect } from 'react';

const Reviews = () => {
    const { id } = useParams<{ id: string }>();
    const [image, setImage] = useState<IProductCard | null>(null);
    const [product, setProduct] = useState<IProductCard | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  

    return (
        <div>
            <div >
                <h2>Замок дверной электронный Golden Soft GS-200Z-5</h2>

                <div className="product-overview">
                    <p>
                        Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы – этот замок сразу заявляет о своем высоком статусе.
                        Изысканный черный цвет корпуса в обрамлении из золота мгновенно притягивает взгляды.
                        Функционален, удобен в работе и легок в уходе: для сохранения блеска достаточно лишь протереть поверхность салфеткой.
                    </p>

                    <p>Подходит для установки на деревянную/межкомнатную дверь.</p>
                </div>

                <div className="product-features">
                    <h3>Преимущества умного замка от Golden Soft с приложением:</h3>
                    <ul>
                        <li>Минимизирует кражи среди персонала</li>
                        <li>Сложно взломать, высокая надежность</li>
                        <li>Можно отказаться от создания физических карт или ключей и высылать электронный ключ новым сотрудникам прямо на смартфон</li>
                        <li>Отслеживание статистики открытий с информацией о каждом открывавшем замок человеке</li>
                        <li>Каждый ключ записывается в память замка с уникальным токеном, что делает почти невозможным подделку цифрового ключа</li>
                    </ul>
                </div>

                <div className="product-setup">
                    <p>
                        Замки программируются с помощью Bluetooth-соединения с приложением на вашем устройстве или с помощью мастер-карты, которая переводит замок в режим программирования.
                        После получения ключа вы сможете выставить для себя уникальный пин-код или настроить отпечаток пальца прямо через приложение.
                        Также вы всегда можете выписывать карты или браслеты стандарта Mifare с помощью Энкодера в связке с приложением на ПК либо Android.
                    </p>
                </div>
            </div>
            <div>
                {/* <img src={product.image} /> */}
            </div> </div>
    )
}
export default Reviews