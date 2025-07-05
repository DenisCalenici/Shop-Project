
import Layout from '../Layout/Layout'
import Card from '../ProductPage/ProductPage'
import UlContainer from '../welcome/UlContainer/UlContainer';

import ViewHistory from '../welcome/View_history/ViewHistory';
import CeoProduct from '../welcome/Ceo_product/CeoProduct';






const ProductInfo = () => {
	
	return (
		<>
			<Layout title={'string'}>
				

				<ViewHistory />
				<CeoProduct />
				<UlContainer />
			</Layout>
		</>
	);
};

export default ProductInfo;