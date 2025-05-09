import { useState } from 'react'
import s from './welcome.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
// import { on } from 'events'

export function Welcome() {
	const [nav, setNav] = useState(false)
	return (
		<div className={s.body}>
			<div className={s.header}>
				<div className={s.header_container}>
					<div className={s.header_logo}>
						<img src="./app/img/Logo (1).svg" />
					</div>
					<div className={s.header_ul}>
						<a href="#" className={s.header_a}>
							Главная
						</a>
						<a href="#" className={s.header_a}>
							Каталог
						</a>
						<a href="#" className={s.header_a}>
							Оптовая продажа
						</a>
						<a href="#" className={s.header_a}>
							О нас
						</a>
					</div>
					<div className={s.header_contacts}>
						<a href="#" className={s.header_contacts_a}>
							+7 (966) 55 88 499
						</a>
						<div className={s.header_contacts_img}>
							
							
							<img
								className={s.img_icons_header}
								src="app/img/Vector.png"
							/>
							<img
								className={s.img_icons_header}
								src="app/img/Frame.png"></img>
						</div>

					</div>
				</div>

				<header className={s.burger_header}>
					<div className={s.container}>
						<div className={s.box}>
							<div
								className={
									nav
										? [s.box_ul, s.active].join(' ')
										: s.box_ul
								}
							><ul className={s.box_ul_ul}>
									<li className={s.box_li}>
										<a className={s.box_a} href="#">
											Главная
										</a>
									</li>
									<li className={s.box_li}>
										<a className={s.box_a} href="#">
											Каталог
										</a>
									</li>
									<li className={s.box_li}>
										<a className={s.box_a} href="#">
											Оптовая продажа
										</a>
									</li>
									<li className={s.box_li}>
										<a className={s.box_a} href="#">
											О нас
										</a>
									</li></ul>


								<div className={s.box_namber}>
									<span> <img
										className={s.box_namber_img}
										src="app/img/phone-call 1.png"
									/> +7 (966) 55 88 499</span>
									<span> <a href="#">Обратный звонок</a></span>
								</div>
							</div>
							<div
								onClick={() => setNav(!nav)}
								className={s.mobile_btn}
							>
								{nav ? (
									<AiOutlineClose size={24} />
								) : (
									<AiOutlineMenu size={24} />
								)}
							</div>
							<div className={s.box_logo_img}>
								<img
									className={s.box_img}
									src="app/img/Vector.png"
								/>
								<img
									className={s.box_img}
									src="app/img/Frame.png"
								/>
							</div>
						</div>
					</div>
				</header>
			</div>
			<div className={s.body_container}>

				<h1 className={s.text_h1}>
					<a href="#" className={s.text_a_1}>
						Главная
					</a>

					<img
						className={s.text_a_2}
						src="app/img/Vector12.png"
					/>

					<a href="#" className={s.text_a_3}>
						/ Каталог
					</a>

					<p className={s.text_h3}>
						Накладные электронные замки
						<span className={s.text_p3}>(854)</span>
					</p>

				</h1>
				<div className={s.catalog}>
					<div className={s.block}>
						<button className={s.filter_button_1}>
							Сбросить фильтры
						</button>
						<button className={s.filter_button_2}>
							Популярности
						</button>

					</div>
					<button className={s.filter_button_3}>
						Фильтр
					</button>
					<div className={s.filter_block}>
						<div className={s.filter}></div>

						<div className={s.filter_product_cards}>
							<div className={s.product_cards}>1</div>
							<div className={s.product_cards}>2</div>
							<div className={s.product_cards}>3</div>
							<div className={s.product_cards}>4</div>
							<div className={s.product_cards}>5</div>
							<div className={s.product_cards}>6</div>
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
						<h3 className={s.ceo_product_h3}>
							Eget quis quam metus, scelerisque.
						</h3>
						<div className={s.ceo_product_text}>
							Odio felis sit leo, massa, mauris, at pulvinar
							ultrices. Eu porttitor molestie massa porttitor.
							Quisque at turpis ut proin eu et magna etiam
							rhoncus.
							<ul className={s.ul_text_pc}>
								<li className={s.li_text_pc}>
									<input className={s.input_text_pc} type="checkbox" />
									<p className={s.p_pc}>Межкомнатую дверь</p>
								</li>
								<li className={s.li_text_pc}>
									<input className={s.input_text_pc} type="checkbox" />
									<p className={s.p_text_pc}>Деревянную дверь</p>
								</li>
								<li className={s.li_text_pc_2}>
									<input type="checkbox" />
									<p className={s.p_text_pc}>Межкомнатую дверь</p>
								</li>
								<li className={s.li_text_pc_3}>
									<input type="checkbox" />
									<p className={s.p_text_pc}>Деревянную дверь</p>
								</li>
							</ul>
						</div>
						<div className={s.ceo_product_text}>
							Ac risus neque pulvinar tincidunt est. Tristique
							imperdiet viverra interdum in leo. Nullam
							ullamcorper id enim fermentum integer praesent
							bibendum. In ullamcorper purus scelerisque
							malesuada et egestas. Ac dictumst mauris sed
							facilisis.
						</div>
					</div>
					<div className={s.product_block}>
						<img className={s.product_block} src="app/img/white-3.png" />
					</div>
					<div className={s.product_block}>
						<img className={s.product_block} src="app/img/white-2.png" />
					</div>
					<div className={s.product_block}>
						<h3 className={s.ceo_product_h3}>
							Eget quis quam metus, scelerisque.
						</h3>
						<div className={s.ceo_product_text}>
							Odio felis sit leo, massa, mauris, at pulvinar
							ultrices. Eu porttitor molestie massa porttitor.
							Quisque at turpis ut proin eu et magna etiam
							rhoncus.
						</div>
						<div className={s.ceo_product_text}>
							Ac risus neque pulvinar tincidunt est. Tristique
							imperdiet viverra interdum in leo. Nullam
							ullamcorper id enim fermentum integer praesent
							bibendum. In ullamcorper purus scelerisque
							malesuada et egestas. Ac dictumst mauris sed
							facilisis.
						</div>
					</div>
				</div>

				<div className={s.ceo_product_mobile}>
					<div className={s.product_block_mobile}>
						<div className={s.product_block_mobile}>
							<img className={s.product_block_mobile} src="app/img/white-3.png" />
						</div>
						<h3 className={s.ceo_product_h3_mobile}>
							Eget quis quam metus, scelerisque.
						</h3>
						<div className={s.ceo_product_text_mobile}>
							Odio felis sit leo, massa, mauris, at pulvinar
							ultrices. Eu porttitor molestie massa porttitor.
							Quisque at turpis ut proin eu et magna etiam
							rhoncus.
							<ul className={s.ul_text_mobile}>
								<li className={s.li_text_mobile}>
									<input type="checkbox" />
									<p className={s.p_text_mobile}> Межкомнатую дверь</p>
								</li>
								<li className={s.li_text_mobile}>
									<input type="checkbox" />
									<p className={s.p_text_mobile} >Деревянную дверь</p>
								</li>
								<li className={s.li_text_mobile}>
									<input type="checkbox" />
									<p className={s.p_text_mobile}>Межкомнатую дверь</p>
								</li>
								<li className={s.li_text_mobile}>
									<input type="checkbox" />
									<p className={s.p_text_mobile}>Деревянную дверь</p>
								</li>
							</ul>
						</div>
						<div className={s.ceo_product_text_mobile}>
							Ac risus neque pulvinar tincidunt est. Tristique
							imperdiet viverra interdum in leo. Nullam
							ullamcorper id enim fermentum integer praesent
							bibendum. In ullamcorper purus scelerisque
							malesuada et egestas. Ac dictumst mauris sed
							facilisis.
						</div>
					</div>

					<div className={s.product_block_mobile}>
						<img className={s.product_block_mobile} src="app/img/white-2.png" />
					</div>
					<div className={s.product_block_mobile}>
						<h3 className={s.ceo_product_h3_mobile}>
							Eget quis quam metus, scelerisque.
						</h3>
						<div className={s.ceo_product_text_mobile}>
							Odio felis sit leo, massa, mauris, at pulvinar
							ultrices. Eu porttitor molestie massa porttitor.
							Quisque at turpis ut proin eu et magna etiam
							rhoncus.
						</div>
						<div className={s.ceo_product_text_mobile}>
							Ac risus neque pulvinar tincidunt est. Tristique
							imperdiet viverra interdum in leo. Nullam
							ullamcorper id enim fermentum integer praesent
							bibendum. In ullamcorper purus scelerisque
							malesuada et egestas. Ac dictumst mauris sed
							facilisis.
						</div>
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

			</div>
			<div className={s.footer_body}>
				<div className={s.footer}>
					<div className={s.footer_logo}>
						<div>
							<img
								className={s.footer_logo_img}
								src="app/img/Logo (5).png"
							/>

						</div>
						<div >
							<img
								className={s.footer_logo_img_2}
								src="app/img/Frame 4075216.png"
							/>
						</div>
					</div>
					<div className={s.footer_ul}>
						<ul className={s.footer_ul_ul}>
							<h1 className={s.footer_ul_h1}>Навигация</h1>
							<br />
							<a className={s.footer_ul_a} href="#">
								Главная
							</a>
							<br />
							<a className={s.footer_ul_a} href="#">
								Каталог
							</a>
							<br />
							<a className={s.footer_ul_a} href="#">
								Оптовая продажа
							</a>
							<br />
							<a className={s.footer_ul_a} href="#">
								О нас
							</a>
						</ul>
						<ul className={s.footer_ul_ul}>
							<h1 className={s.footer_ul_h1}>
								Наши контакты
							</h1>
							<br />
							<h1 className={s.footer_ul_a}>Телефоны</h1>

							<a className={s.footer_ul_a} href="#">
								+7 (988) 565 00 38
							</a>
							<br />
							<a className={s.footer_ul_a} href="#">
								+375 33 662 82 56
							</a>
							<h1 className={s.footer_ul_a}>Email</h1>
							<a className={s.footer_ul_a} href="#">
								vladpertcev@mail.ru
							</a>
							<br />
							<a className={s.footer_ul_a} href="#">
								korobko416@gmail.com
							</a>
						</ul>

						<ul className={s.footer_ul_ul}>
							<h1 className={s.footer_ul_h3}>Информация</h1>
							<h1 className={s.footer_ul_h2}>Другое</h1>
							<br />
							<a className={s.footer_ul_a} href="#">
								Доставка и оплата
							</a>
							<br />
							<a className={s.footer_ul_a} href="#">
								Гарантии
							</a>
							<br />
							<a className={s.footer_ul_a} href="#">
								Возврат товара
							</a>
						</ul>
						<ul className={s.footer_ul_ul}>
							<h1 className={s.footer_ul_h1}>Наш адрес</h1>
							<br />
							<a className={s.footer_ul_a} href="#">
								Россия, Ростов-на-Дону ул. Богачева, 16
							</a>
							<br />
							<a className={s.footer_ul_a} href="#">
								Беларусь, Солигорск ул. Ленина, 10б
							</a>
						</ul>
					</div>
				</div>
				<div className={s.footer_end}>
					<p className={s.footer_end_p}>
						© 2021 Golden Soft All rights reserved.
					</p>
				</div>
			</div>
		</div>
	)
}
