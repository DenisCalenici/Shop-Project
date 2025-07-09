import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductById } from './Api';
import type { IProductCard } from '../Product/ProductCard.type';
import Layout from '../Layout/Layout';
import UlContainer from '../welcome/UlContainer/UlContainer';
import CeoProduct from '../welcome/Ceo_product/CeoProduct';
import ViewHistory from '../welcome/View_history/ViewHistory';
import s from "./ProductPage.module.css"
import IconColor1 from './imgProductPage/Icon color (1).png';
import LikeButton from './imgProductPage/Vector.png'
import offButton from './imgProductPage/off_button.png'
import onButton from './imgProductPage/open_button.png'
import Description from './productSpecs';

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
    <Layout title={"string"}  >
      <div className={s.product_page_container}>
        <div className={s.product_page}>
          <img className={s.product_image} src={product.image} />
          <div className={s.image_nev} >
            <img className={s.product_image_nev} src={product.image} />
            <img className={s.product_image_nev} src={product.image} />
            <img className={s.product_image_nev} src={product.image} />
            <img className={s.product_image_nev} src={product.image} />
          </div>
        </div>
        <div>
          <div>
            <h2 className={s.rating}>{product.rating.rate}<br />({product.rating.count})Отзывы</h2>
            <h1 className={s.title_name}>{product.title}</h1>
            <div className={s.installation} > Подходит для установки на:<br />
              <input type="checkbox" /> <p className={s.wooden_door} >Деревянная дверь</p>
              <input type="checkbox" /> <p className={s.interior_door}> Межкомнатная дверь </p>
            </div>
            <div className={s.product_filter}>
              <div className={s.product_complection}> Комплектация <br />
                <button className={s.product_complection_button} >Smart замок без приложения  <img src={offButton} /> </button>
              </div>
              <div className={s.product_color}> Цвет <br />
                <button className={s.p_color_1}><img src={IconColor1} /></button>
                <button className={s.p_color_2}></button>
                <button className={s.p_color_3}></button>
              </div>
            </div>
            <div className={s.price}>{product.price}$</div>
            <div className={s.button_add}>
              <button className={s.purchase_button} >Купить</button>
              <button className={s.like_button}> <img className={s.like_img} src={LikeButton} /> <p className={s.like_p}>В избранное</p></button>
            </div>
            <div className={s.information}>
              <button onClick={toggleInfo} className={s.payment} > Оплата  {isInfoOpen ? <img src={onButton} /> : <img src={offButton} />}</button>

              {isInfoOpen && (
                <p>Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении</p>)}
              <button onClick={installInfo} className={s.installation_and_delivery}>Монтаж и доставка{isInstallDev ? <img src={onButton} /> : <img src={offButton} />}  </button>
              {isInstallDev && (
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse rerum eum quo accusantium soluta animi reprehenderit ratione explicabo odit nihil sint beatae quae nostrum, totam, a ab at! Dignissimos.</p>)}
              <button onClick={guarInfo} className={s.guarantee_and_benefit}>Гарантия и выгода {isGuarBenefit ? <img src={onButton} /> : <img src={offButton} />} </button>
              {isGuarBenefit && (
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi labore enim ullam, aut eligendi eum culpa consequatur beatae eos molestiae error quos excepturi quasi sint odit alias, cumque eveniet?</p>)}

            </div>
          </div>
        </div>

      </div>
      <Description />
      <ViewHistory />
      <CeoProduct />

      <UlContainer />
    </Layout >

  );
};

export default ProductPage;