import { useState } from 'react';
import s from './productSpecs.module.css'
import Reviews from './reviews';
import Description from './description'
import Specifications from './specifications';

const productSpecs = () => {
    const [isDescription, setDescription] = useState(false);
    const [isReviews, setReviews] = useState(false);
    const [isSpecifications, setSpecifications] = useState(false);
    const description = () => {
        setDescription(!isDescription);
    };
    const reviews = () => {
        setReviews(!isReviews);
    };
    const specifications = () => {
        setSpecifications(!isSpecifications);
    };
    return (
        <div className={s.container_button}>
            <div className={s.description_button} >
                <button onClick={description} className={s.description_button_1}>Характеристики</button>
                <button onClick={reviews} className={s.description_button_2}>Описание</button>
                <button onClick={specifications} className={s.description_button_3}>Отзывы</button>
                {isDescription && (<Description />)}
                {isReviews && (<Reviews />)}
                {isSpecifications && (<Specifications />)}
            </div>

        </div>
    )
}
export default productSpecs