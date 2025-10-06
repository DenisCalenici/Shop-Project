
export const addToCart = (product?: any) => {
    const currentCount = parseInt(localStorage.getItem('cartCount') || '0');
    const newCount = currentCount + 1;
    
   
    localStorage.setItem('cartCount', newCount.toString());
    
   
    window.dispatchEvent(new CustomEvent('cartUpdated', {
        detail: { count: newCount }
    }));
    

    if (product) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const existingItem = cartItems.find((item: any) => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
};

export const getCartCount = (): number => {
    return parseInt(localStorage.getItem('cartCount') || '0');
};

export const clearCart = () => {
    localStorage.setItem('cartCount', '0');
    localStorage.setItem('cartItems', '[]');
    window.dispatchEvent(new CustomEvent('cartUpdated', {
        detail: { count: 0 }
    }));
};