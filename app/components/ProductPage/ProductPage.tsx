import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '~/components/Product/ProductCard';
import { fetchProductById } from './Api';
import type { IProductCard } from '../Product/ProductCard.type';
import Layout from '../Layout/Layout';
import UlContainer from '../welcome/UlContainer/UlContainer';
import CeoProduct from '../welcome/Ceo_product/CeoProduct';
import ViewHistory from '../welcome/View_history/ViewHistory';
import s from "./ProductPage.module.css"
const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [image, setImage] = useState<IProductCard | null>(null);
  const [product, setProduct] = useState<IProductCard | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (id) {
        setLoading(true);
        try {
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
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Товар не найден.</div>;
  }

  return (
    <Layout title={"string"}  >
      <div className={s.product_page_container}>
        <div className={s.product_page}>
          {/* <h1>{product.title}</h1> */}
          <img className={s.product_image} src={product.image} />
          {/* <ProductCard product={product} /> */}
        </div>
        <div>
          <div>
            <h2>{product.rating.count}</h2>
            <h1>{product.title}</h1>
            <div > Подходит для установки на:

              <input type="checkbox" /><p>Деревянная дверь</p>
              <input type="checkbox" /> <p> Межкомнатная дверь </p>
            </div>
            <div className={s.product_filter}>
              <div className={s.product_complection}> Комплектация <br />
                <input type="text" />
              </div>
              <div className={s.product_color}> Цвет <br />
                <button className={s.p_color_1}><img src='./img/Icon color (1).png' /></button>
                <button className={s.p_color_2}></button>
                <button className={s.p_color_3}></button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <ViewHistory />
      <CeoProduct />

      <UlContainer />
    </Layout >

  );
};

export default ProductPage;