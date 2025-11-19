import { useState, useMemo } from 'react';
import type { IProductCard } from '../Product/ProductCard.type'

export interface FilterState {
    category: string;
    priceRange: [number, number];
    searchQuery: string;
    sortBy: 'popularity' | 'price-low' | 'price-high' | 'rating';
}

export const useProductFilter = (products: IProductCard[]) => {
    const [filters, setFilters] = useState<FilterState>({
        category: 'all',
        priceRange: [0, 1000],
        searchQuery: '',
        sortBy: 'popularity',
    });

    const categories = useMemo(() => {
        return ['all', ...new Set(products.map(product => product.category))];
    }, [products]);

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products.filter(product => {
            // Фильтр по категории
            if (filters.category !== 'all' && product.category !== filters.category) {
                return false;
            }

            // Фильтр по цене
            if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
                return false;
            }

            // Фильтр по поисковому запросу
            if (filters.searchQuery &&
                !product.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
                !product.description.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
                return false;
            }

            return true;
        });

        // Сортировка
        switch (filters.sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating.rate - a.rating.rate);
                break;
            case 'popularity':
            default:
                filtered.sort((a, b) => b.rating.count - a.rating.count);
                break;
        }

        return filtered;
    }, [products, filters]);

    const updateCategory = (category: string) => {
        setFilters(prev => ({ ...prev, category }));
    };

    const updatePriceRange = (min: number, max: number) => {
        setFilters(prev => ({ ...prev, priceRange: [min, max] }));
    };

    const updateSearchQuery = (query: string) => {
        setFilters(prev => ({ ...prev, searchQuery: query }));
    };

    const updateSortBy = (sortBy: FilterState['sortBy']) => {
        setFilters(prev => ({ ...prev, sortBy }));
    };

    const resetFilters = () => {
        setFilters({
            category: 'all',
            priceRange: [0, 1000],
            searchQuery: '',
            sortBy: 'popularity',
        });
    };

    return {
        filters,
        filteredProducts: filteredAndSortedProducts,
        categories,
        updateCategory,
        updatePriceRange,
        updateSearchQuery,
        updateSortBy,
        resetFilters,
    };
};