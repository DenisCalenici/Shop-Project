import { useState } from 'react';
import s from './productSpecs.module.css'
import Reviews from './reviews';
import Description from './description'
import Specifications from './specifications';
import offButton from '../../img/off_button.png';
import onButton from '../../img/open_button.png';
const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
const handleAccordionToggle = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
};
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

    const accordionSections = [
        {
            id: 'payment',
            title: 'Оплата',
            content: 'Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении'
        },
        {
            id: 'installation',
            title: 'Монтаж и доставка',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse rerum eum quo accusantium soluta animi reprehenderit ratione explicabo odit nihil sint beatae quae nostrum, totam, a ab at! Dignissimos.'
        },
        {
            id: 'guarantee',
            title: 'Гарантия и выгода',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi labore enim ullam, aut eligendi eum culpa consequatur beatae eos molestiae error quos excepturi quasi sint odit alias, cumque eveniet?'
        }
    ];
    return (
        <div className={s.container_button}>
            <div className={s.description_button} >
                {/* <button onClick={description} className={s.description_button}>Характеристики</button>
                <button onClick={reviews} className={s.description_button}>Описание</button>
                <button onClick={specifications} className={s.description_button}>Отзывы</button> */}
                <>          {accordionSections.map(section => (
                    <div key={section.id} className={s.accordion_item}>
                        <button
                            onClick={() => handleAccordionToggle(section.id)}
                            className={`${s.accordion_button} ${activeAccordion === section.id ? s.accordion_button_active : ''}`}
                        >
                            {section.title}
                            <img
                                src={activeAccordion === section.id ? onButton : offButton}
                                alt={activeAccordion === section.id ? "On" : "Off"}
                            />
                        </button>

                        {activeAccordion === section.id && (
                            <div className={s.accordion_content}>
                                <p>{section.content}</p>
                            </div>
                        )}
                    </div>
                ))}</>

                {isDescription && (<Description />)}
                {isReviews && (<Reviews />)}
                {isSpecifications && (<Specifications />)}
            </div>

        </div>
    )
}
export default productSpecs