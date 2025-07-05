// src/api.ts
import type { IProductCard } from '../Product/ProductCard.type';

export const fetchProductById = async (id: number): Promise<IProductCard | null> => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
            throw new Error(`Ошибка при загрузке товара с id ${id}`);
        }
        const data: IProductCard = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};