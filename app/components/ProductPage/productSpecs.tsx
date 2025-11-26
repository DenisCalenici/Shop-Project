import { useState } from 'react';
import s from './productSpecs.module.css'
import Reviews from './reviews';
import Description from './description'
import Specifications from './specifications';

const ProductSpecs = () => {
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const handleTabClick = (tabName: string) => {
        setActiveTab(activeTab === tabName ? null : tabName);
    };

    return (
        <div className={s.container_button}>
            <div className={s.description_button}>
                <button
                    onClick={() => handleTabClick('specifications')}
                    className={`${s.description_button} ${activeTab === 'specifications' ? s.active : ''}`}
                >
                    Характеристики
                </button>
                <button
                    onClick={() => handleTabClick('description')}
                    className={`${s.description_button} ${activeTab === 'description' ? s.active : ''}`}
                >
                    Описание
                </button>
                <button
                    onClick={() => handleTabClick('reviews')}
                    className={`${s.description_button} ${activeTab === 'reviews' ? s.active : ''}`}
                >
                    Отзывы
                </button>

                {activeTab === 'description' && <Description />}
                {activeTab === 'reviews' && <Reviews />}
                {activeTab === 'specifications' && <Specifications />}
            </div>
        </div>
    )
}

export default ProductSpecs;