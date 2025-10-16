
import { useCart } from '../Context/CartContext';
import s from "../welcome.module.css"


interface CartCounterProps {
    className?: string;
 onCartClick?: () => void;
}




const CartCounter: React.FC<CartCounterProps> = ({ 
    className = '', 
    onCartClick 
}) => {
    const { headerCartCount } = useCart();

    // Обработчик клика по счетчику
    const handleClick = () => {
        if (onCartClick) {
            onCartClick();
        }
    };

    if (headerCartCount === 0) return null;

    return (
        <div 
            onClick={handleClick} 
            className={`${s.cartCounter} ${className}`}
            style={{ cursor: onCartClick ? 'pointer' : 'default' }} // Меняем курсор если есть обработчик
        >
            {headerCartCount > 99 ? '99+' : headerCartCount}
        </div>
    );
};

export default CartCounter;