
import React from 'react';
import type { FilterState } from '../Hooks/useProductFilter';
import s from "../welcome/welcome.module.css"
interface FilterProductProps {
    filters: FilterState;
    categories: string[];
    onCategoryChange: (category: string) => void;
    onPriceRangeChange: (min: number, max: number) => void;
    onSearchChange: (query: string) => void;
    onClose?: () => void;
    onReset: () => void;
}

const FilterProduct: React.FC<FilterProductProps> = ({
    filters,
    categories,
    onCategoryChange,
    onPriceRangeChange,
    onSearchChange,
    onClose,
}) => {
    return (
        <div className="filter-container">

            {onClose && (
                <div className={s.filter_mobile_header}>
                    <h3>Фильтры</h3>
                </div>
            )}
            <div className={s.filter_section}>
                <h4>Цена</h4>
                <div className={s.price_range}>
                    <div className={s.price_inputs}>
                        <input
                            type="number"
                            value={filters.priceRange[0]}
                            onChange={(e) => onPriceRangeChange(Number(e.target.value), filters.priceRange[1])}
                            min="0"
                            max="1000"
                            className={s.price_input}
                        />

                        <input
                            type="number"
                            value={filters.priceRange[1]}
                            onChange={(e) => onPriceRangeChange(filters.priceRange[0], Number(e.target.value))}
                            min="0"
                            max="1000"
                            className={s.price_input}
                        />
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={filters.priceRange[1]}
                        onChange={(e) => onPriceRangeChange(filters.priceRange[0], parseInt(e.target.value))}
                        className={s.price_slider}
                    />
                </div>
            </div>



            <div className={s.filter_section}>
                <h4>Категории</h4>
                <div className={s.categories_list}>
                    {categories.map(category => (
                        <label key={category} className={s.category_label}>
                            <input
                                type="checkbox"
                                checked={filters.category === category}
                                onChange={() => onCategoryChange(category)}
                                className={s.category_checkbox}
                            />
                            <span className={`${s.category_text} ${filters.category === category ? s.category_active : ''}`}>
                                {category === 'all' ? 'Все категории' : category}
                            </span>
                        </label>
                    ))}
                </div>
            </div>


            <div className={s.filter_section}>
                <h4>Поиск</h4>
                <input
                    type="text"
                    placeholder="Поиск товаров..."
                    value={filters.searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className={s.search_input}
                />
            </div>


        </div>
    );
};

export default FilterProduct;