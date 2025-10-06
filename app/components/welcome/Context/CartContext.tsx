import type { ReactNode } from 'react';
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { IProductCard } from '~/components/Product/ProductCard.type';

interface CartItem extends IProductCard {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: IProductCard) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
    // ДОБАВИЛИ НОВОЕ СОСТОЯНИЕ ДЛЯ СЧЕТЧИКА В ХЕДЕРЕ
    headerCartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    // ДОБАВИЛИ ОТДЕЛЬНОЕ СОСТОЯНИЕ ДЛЯ СЧЕТЧИКА В ХЕДЕРЕ
    const [headerCartCount, setHeaderCartCount] = useState<number>(0);

    // ДОБАВИЛИ useEffect ДЛЯ СИНХРОНИЗАЦИИ С LOCALSTORAGE
    useEffect(() => {
        const savedCount = localStorage.getItem('headerCartCount');
        if (savedCount) {
            setHeaderCartCount(parseInt(savedCount));
        }
    }, []);

    // ДОБАВИЛИ useEffect ДЛЯ СОХРАНЕНИЯ В LOCALSTORAGE
    useEffect(() => {
        localStorage.setItem('headerCartCount', headerCartCount.toString());
        
        // ОТПРАВЛЯЕМ СОБЫТИЕ ДЛЯ ОБНОВЛЕНИЯ ВСЕХ СЧЕТЧИКОВ
        window.dispatchEvent(new CustomEvent('cartCountUpdated', {
            detail: { count: headerCartCount }
        }));
    }, [headerCartCount]);

    const addToCart = (product: IProductCard) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevItems, { ...product, quantity: 1 }];
        });
        
        // ДОБАВИЛИ УВЕЛИЧЕНИЕ СЧЕТЧИКА ДЛЯ ХЕДЕРА
        setHeaderCartCount(prev => prev + 1);
    };

    const removeFromCart = (productId: number) => {
        setCartItems(prevItems => {
            const itemToRemove = prevItems.find(item => item.id === productId);
            if (itemToRemove) {
                // УМЕНЬШАЕМ СЧЕТЧИК НА КОЛИЧЕСТВО УДАЛЯЕМОГО ТОВАРА
                setHeaderCartCount(prev => Math.max(0, prev - itemToRemove.quantity));
            }
            return prevItems.filter(item => item.id !== productId);
        });
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems(prevItems => {
            const oldItem = prevItems.find(item => item.id === productId);
            const newItems = prevItems.map(item =>
                item.id === productId ? { ...item, quantity } : item
            );
            
            // ОБНОВЛЯЕМ СЧЕТЧИК ПРИ ИЗМЕНЕНИИ КОЛИЧЕСТВА
            if (oldItem) {
                const quantityDiff = quantity - oldItem.quantity;
                setHeaderCartCount(prev => Math.max(0, prev + quantityDiff));
            }
            
            return newItems;
        });
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const value: CartContextType = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        getTotalItems,
        // ДОБАВИЛИ НОВОЕ СВОЙСТВО
        headerCartCount
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};