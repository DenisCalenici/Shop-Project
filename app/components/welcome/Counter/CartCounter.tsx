
import { useCart } from '../Context/CartContext';
import s from "../welcome.module.css"


interface CartCounterProps {
    className?: string;
 
}

const CartCounter: React.FC<CartCounterProps> = ({ className = '' }) => {
    const { headerCartCount } = useCart();

    if (headerCartCount === 0) return null;

    return (
        <div className={`${s.cartCounter} ${className}`}>
            {headerCartCount > 99 ? '99+' : headerCartCount}
        </div>
    );
};

export default CartCounter;