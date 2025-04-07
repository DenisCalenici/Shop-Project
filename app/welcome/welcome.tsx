import s from './welcome.module.css'
export function Welcome() {
	return (
		<div className={s.body}>
			<div className={s.header}>
				<div className={s.header_container}>
					<div className={s.header_logo}>
						<img src="./app/img/Logo (1).svg" />
					</div>
					<div className={s.header_ul}>
						<a className={s.header_a}>Главная</a>

						<a className={s.header_a}>Каталог</a>

						<a className={s.header_a}>Оптовая продажа</a>
						<a className={s.header_a}>О нас</a>
					</div>
					<div className={s.header_contacts}>
						<a>+7 (966) 55 88 499</a>
						<img
							className={s.img_icons_header}
							src="./app/img/free-icon-like-2340071.png"
						/>
						<img
							className={s.img_icons_header}
							src="./app/img/free-icon-shopping-cart-of-checkered-design-34627.png"
						/>
					</div>
				</div>
				<h1 className={s.text_h1}>
					<a>Главная / </a>
					<a>Каталог</a>
				</h1>
				<h3 className={s.text_h3}>Накладные электронные замки (854)</h3>

				<div className={s.catalog}>
					<div className={s.filter_block}>
						<button className={s.button}>Сбросить фильтры</button>
						<div className={s.filter}>
							<br />
							<br />
							<br />
							<br />
							<br />

							<br />
							<br />
							<br />
							<br />

							<br />
							<br />
							<br />
							<br />

							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />

							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
					<div className={s.filter_product_cards}>
						<div className={s.product_cards}>
							<br />
							<br />
							<br />
							1
							<br />
						</div>
						<div className={s.product_cards}>
							<br />
							<br />
							<br />
							2
							<br />
						</div>
						<div className={s.product_cards}>
							<br />
							<br />
							<br />
							3
							<br />
						</div>
						<div className={s.product_cards}>
							<br />
							<br />
							<br />
							4
							<br />
						</div>
						<div className={s.product_cards}>
							<br />
							<br />
							5
							<br />
							<br />
						</div>
						<div className={s.product_cards}>
							<br />
							<br />
							6
							<br />
							<br />
						</div>
					</div>
				</div>
				<div className={s.viewing_history}>
					<h3 className={s.viewing_history_text}>
						Вы недавно просмотрели
					</h3>
					<div className={s.viewing_history_carts}>
						<div className={s.history_carts}>1</div>
						<div className={s.history_carts}>2</div>
						<div className={s.history_carts}>3</div>
						<div className={s.history_carts}>4</div>
					</div>
				</div>
				<div className={s.ceo_product}>
					<div className={s.product_block}>
						Eget quis quam metus, scelerisque. Odio felis sit leo,
						massa, mauris, at pulvinar ultrices. Eu porttitor
						molestie massa porttitor. Quisque at turpis ut proin eu
						et magna etiam rhoncus. Межкомнатую дверь Межкомнатую
						дверь Деревянную дверь Деревянную дверь Ac risus neque
						pulvinar tincidunt est. Tristique imperdiet viverra
						interdum in leo. Nullam ullamcorper id enim fermentum
						integer praesent bibendum. In ullamcorper purus
						scelerisque malesuada et egestas. Ac dictumst mauris sed
						facilisis.
					</div>
					<div className={s.product_block}>
						<img src="app/img/white-2.png" />
					</div>
					<div className={s.product_block}>
						<img src="app/img/white-3.png" />
					</div>
					<div className={s.product_block}>
						<h4> Eget quis quam metus, scelerisque.</h4>
						<p>
							Odio felis sit leo, massa, mauris, at pulvinar
							ultrices. Eu porttitor molestie massa porttitor.
							Quisque at turpis ut proin eu et magna etiam
							rhoncus. Ac risus neque pulvinar tincidunt est.
							Tristique imperdiet viverra interdum in leo. Nullam
							ullamcorper id enim fermentum integer praesent
							bibendum. In ullamcorper purus scelerisque malesuada
							et egestas. Ac dictumst mauris sed facilisis.
						</p>
					</div>
				</div>
				<div className={s.ul}>
					<h3 className={s.ul_h3}>Мы Вам перезвоним</h3>
					<p className={s.ul_text}>
						Если у вас возникли какие-то вопросы или проблемы,
						заполните форму и мы Вам перезвоним.
					</p>
					<div className={s.ul_forms}>
						<input
							placeholder="Ваше имя"
							className={s.ul_input}
							type="text"
						></input>
						<input
							placeholder="Ваш Email"
							className={s.ul_input}
							type="text"
						></input>
						<button className={s.ul_button}>Отправить</button>
					</div>
				</div>
				<div className={s.footer}>
					<div className={s.footer_logo}>
						<img
							className={s.footer_logo_img}
							src="app/img/Logo (5).png"
						/>

						<img
							className={s.footer_logo_img}
							src="app/img/Frame 4075216.png"
						/>
					</div>
					<div className={s.footer_ul}>
						<ul className={s.footer_ul_ul}>
							<h1>Навигация</h1>
							<br />
							<a>Главная</a>
							<br />
							<a>Каталог</a>
							<br />
							<a>Оптовая продажа</a>
							<br />
							<a>О нас</a>
						</ul>
						<ul>
							<h1>Наши контакты </h1>
							<br />
							<h1>телефоны</h1>

							<a>+7 (988) 565 00 38</a>
							<br />
							<a>+375 33 662 82 56</a>
							<h1>Email</h1>
							<a>vladpertcev@mail.ru</a>
							<br />
							<a>korobko416@gmail.com</a>
						</ul>
						<ul>
							<h1>Наш адрес</h1>
							<br />
							<a>Россия, Ростов-на-Дону ул. Богачева, 16</a>
						</ul>
						<ul>
							<h1>Информация</h1>
							<br />
							<a>Доставка и оплата</a>
							<br />
							<a>Гарантии</a>
							<br />
							<a>Возврат товара</a>
						</ul>
					</div>
				</div>
				<div className={s.footer_end}>
					© 2021 Golden Soft All rights reserved.
				</div>
			</div>
		</div>
	)
}
