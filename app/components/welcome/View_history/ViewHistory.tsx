
import s from 'app/components/welcome/welcome.module.css'
import ProductList from '~/components/Product/ProductList'
import type { IProductCard } from '~/components/Product/ProductCard.type'

interface ViewHistoryProps {
    products?: IProductCard[];

}

const ViewHistory = ({ products }: ViewHistoryProps) => {

    return (
        <div className={s.viewing_history}>
            <div className={s.viewing_history_body}>
                <div className={s.viewing_history_text}>
                    Вы недавно просмотрели
                </div>
            </div>
            <div className={s.viewing_history_carts}>
                <ProductList products={products || []} />
            </div>
        </div>
    )
}
export default ViewHistory