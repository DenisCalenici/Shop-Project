
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchProductById } from '../../api/product'
import type { IProductCard } from '../Product/ProductCard.type'
import Layout from '../Layout/Layout'
import UlContainer from '../welcome/UlContainer/UlContainer'
import CeoProduct from '../welcome/Ceo_product/CeoProduct'
import ViewHistory from '../welcome/View_history/ViewHistory'
import s from "./ProductPage.module.css"
import IconColor1 from '../../img/Icon_color(1).png'
import LikeButton from '../../img/Vector.png'
import offButton from '../../img/off_button.png'
import onButton from '../../img/open_button.png'
import Description from './productSpecs'
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay'

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [image, setImage] = useState<IProductCard | null>(null);
  const [product, setProduct] = useState<IProductCard | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isInstallDev, setInstallDev] = useState(false);
  const [isGuarBenefit, setGuarBenefit] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      if (id) {
        setLoading(true);
        try {
          
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const productData = await fetchProductById(Number(id));
          if (productData) {
            setProduct(productData);
          } else {
            setError('Товар не найден.');
          }
        } catch {
          setError('Ошибка при загрузке товара.');
        } finally {
          setLoading(false);
        }
      }
    };
    loadProduct();
  }, [id]);


  if (loading) {
    return (
      <>
       
        <Layout title={product?.title || "Загрузка..."}>
       
          <LoadingOverlay message="Загружаем информацию о товаре..." />
        </Layout>
      </>
    );
  }

  if (error) {
    return (
      <Layout title="Ошибка">
        <div className={s.errorContainer}>
          <h2>😕 {error}</h2>
          <button 
            className={s.retryButton}
            onClick={() => window.history.back()}
          >
            Вернуться назад
          </button>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout title="Товар не найден">
        <div className={s.errorContainer}>
          <h2>Товар не найден</h2>
          <button 
            className={s.retryButton}
            onClick={() => window.history.back()}
          >
            Вернуться к каталогу
          </button>
        </div>
      </Layout>
    );
  }

  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };
  
  const installInfo = () => {
    setInstallDev(!isInstallDev);
  };
  
  const guarInfo = () => {
    setGuarBenefit(!isGuarBenefit);
  };

  return (
    <Layout title={product.title}>
      <div className={s.product_page_container}>
        {/* ... твой существующий JSX ... */}
        <div className={s.product_info}>
          
            </div>
        <div className={s.product_page}>
          <img className={s.product_image} src={product.image} alt={product.title} />
          <div className={s.image_nev}>
            <img className={s.product_image_nev} src={product.image} alt="Миниатюра 1" />
            <img className={s.product_image_nev} src={product.image} alt="Миниатюра 2" />
            <img className={s.product_image_nev} src={product.image} alt="Миниатюра 3" />
            <img className={s.product_image_nev} src={product.image} alt="Миниатюра 4" />
          </div>
        </div>
        
        {/* ... остальная разметка товара ... */}
        
      </div>
      <Description />
      <ViewHistory />
      <CeoProduct />
      <UlContainer />
    </Layout>
  );
};

export default ProductPage;