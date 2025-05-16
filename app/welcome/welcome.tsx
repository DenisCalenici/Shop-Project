import { useState } from 'react'
import s from './welcome.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
// import { on } from 'events'

export function Welcome() {
	const [nav, setNav] = useState(false)
	return (
		<div className={s.body}>
			<div className={s.header}>
				<div className={s.header_advertisement_container}>
					<div className={s.header_advertisement}>
						<div className={s.header_advertisement_discount}>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</div>
						<a className={s.header_advertisement_a}> Обратный звонок</a>
					</div>
				</div>
				<div className={s.header_container_container}><div className={s.header_container}>
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
				</div></div>

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
					<div className={s.text_a}>
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
					</div>

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
						<div className={s.filter_product} >
							<div className={s.filter_product_cards}>
								<div className={s.product_cards}>

									<div className={s.filter_castle}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_none.png' />  </button>
												<p className={s.filter_castle_availability_p}>Нет в наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Вариативный замок Golden Soft для отеля</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price}>7 000₽</p>
											<p className={s.price_old_price}>8 000₽</p>
										</div>


									</div>









								</div>
								<div className={s.product_cards}>

									<div className={s.filter_castle_2}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_ok.png' />  </button>
												<p className={s.filter_castle_availability_p}>В наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price_2}>33 000₽</p>
											<p className={s.price_old_price}>39 000₽</p>
										</div>


									</div>

								</div>
								<div className={s.product_cards}>

									<div className={s.filter_castle_3}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_ok.png' />  </button>
												<p className={s.filter_castle_availability_p}>В наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price}>9 000₽</p>
											<p className={s.price_old_price}>12 000₽</p>
										</div>


									</div>









								</div>
								<div className={s.product_cards}>

									<div className={s.filter_castle}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_none.png' />  </button>
												<p className={s.filter_castle_availability_p}>Нет в наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Вариативный замок Golden Soft для отеля</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price}>7 000₽</p>
											<p className={s.price_old_price}>8 000₽</p>
										</div>


									</div>









								</div>
								<div className={s.product_cards}>

									<div className={s.filter_castle_2}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_ok.png' />  </button>
												<p className={s.filter_castle_availability_p}>В наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price_2}>33 000₽</p>
											<p className={s.price_old_price}>39 000₽</p>
										</div>


									</div>

								</div>
								<div className={s.product_cards}>

									<div className={s.filter_castle_3}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_ok.png' />  </button>
												<p className={s.filter_castle_availability_p}>В наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price}>9 000₽</p>
											<p className={s.price_old_price}>12 000₽</p>
										</div>


									</div>









								</div>
								<div className={s.product_cards}>

									<div className={s.filter_castle}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_none.png' />  </button>
												<p className={s.filter_castle_availability_p}>Нет в наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Вариативный замок Golden Soft для отеля</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price}>7 000₽</p>
											<p className={s.price_old_price}>8 000₽</p>
										</div>


									</div>









								</div>
								<div className={s.product_cards}>

									<div className={s.filter_castle_2}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_ok.png' />  </button>
												<p className={s.filter_castle_availability_p}>В наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price_2}>33 000₽</p>
											<p className={s.price_old_price}>39 000₽</p>
										</div>


									</div>

								</div>
								<div className={s.product_cards}>

									<div className={s.filter_castle_3}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_ok.png' />  </button>
												<p className={s.filter_castle_availability_p}>В наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price}>9 000₽</p>
											<p className={s.price_old_price}>12 000₽</p>
										</div>


									</div>









								</div>
								<div className={s.product_cards}>

									<div className={s.filter_castle}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_none.png' />  </button>
												<p className={s.filter_castle_availability_p}>Нет в наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Вариативный замок Golden Soft для отеля</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price}>7 000₽</p>
											<p className={s.price_old_price}>8 000₽</p>
										</div>


									</div>









								</div>
								<div className={s.product_cards}>

									<div className={s.filter_castle_2}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_ok.png' />  </button>
												<p className={s.filter_castle_availability_p}>В наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price_2}>33 000₽</p>
											<p className={s.price_old_price}>39 000₽</p>
										</div>


									</div>

								</div>
								<div className={s.product_cards}>

									<div className={s.filter_castle_3}>
										<div className={s.filter_castle_buttons}>
											<div className={s.filter_castle_availability} >
												<button className={s.filter_castle_button_1}>
													<img src='app/img/button_ok.png' />  </button>
												<p className={s.filter_castle_availability_p}>В наличии </p>
											</div>

											<button className={s.filter_castle_button_2}>SALE </button></div>
										<div className={s.filter_castle_button_body3}>

											<button className={s.filter_castle_button_3}>
												<img src='app/img/podarok.png' /> Подарок </button>
										</div>

									</div>
									<div className={s.price_card}>
										<div className={s.price_card_reviews}>
											<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
											<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
										<div className={s.price_card_name}>
											<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
										</div>
										<div className={s.price_sum_card}>
											<p className={s.price_current_price}>9 000₽</p>
											<p className={s.price_old_price}>12 000₽</p>
										</div>


									</div>









								</div>

							</div>
							<div className={s.paginator_filter}>
								<a href='#'>&lt;</a>
								<a className={s.paginator_active} href='#'>1</a>
								<a href='#'>2</a>
								<a href='#'>3</a>
								<a href='#'>4</a>
								<a href='#'>5</a>
								<a href='#'>6</a>
								<a href='#'>7</a>
								<a href='#'>...</a>
								<a href='#'>15</a>
								<a href='#'>&gt;</a>
							</div>
							<div className={s.paginator_filter_mobile}>
								<a href='#'>&lt;</a>
								<a className={s.paginator_active_mobile} href='#'>1</a>
								<a href='#'>2</a>
								<a href='#'>3</a>

								<a href='#'>...</a>
								<a href='#'>15</a>
								<a href='#'>&gt;</a>
							</div>

						</div>

					</div>

				</div>
				<div className={s.viewing_history}>
					<div className={s.viewing_history_body}>

						<div className={s.viewing_history_text}>
							Вы недавно просмотрели
						</div>


					</div>

					<div className={s.viewing_history_carts}>
						<div className={s.history_carts}>
							<div className={s.product_cards}>

								<div className={s.filter_castle}>
									<div className={s.filter_castle_buttons}>
										<div className={s.filter_castle_availability} >
											<button className={s.filter_castle_button_1}>
												<img src='app/img/button_none.png' />  </button>
											<p className={s.filter_castle_availability_p}>Нет в наличии </p>
										</div>

										<button className={s.filter_castle_button_2}>SALE </button></div>
									<div className={s.filter_castle_button_body3}>

										<button className={s.filter_castle_button_3}>
											<img src='app/img/podarok.png' /> Подарок </button>
									</div>

								</div>
								<div className={s.price_card}>
									<div className={s.price_card_reviews}>
										<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
										<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
									<div className={s.price_card_name}>
										<p className={s.price_card_name_p}>Вариативный замок Golden Soft для отеля</p>
									</div>
									<div className={s.price_sum_card}>
										<p className={s.price_current_price}>7 000₽</p>
										<p className={s.price_old_price}>8 000₽</p>
									</div>


								</div>









							</div>
						</div>
						<div className={s.history_carts}>
							<div className={s.product_cards}>

								<div className={s.filter_castle_2}>
									<div className={s.filter_castle_buttons}>
										<div className={s.filter_castle_availability} >
											<button className={s.filter_castle_button_1}>
												<img src='app/img/button_ok.png' />  </button>
											<p className={s.filter_castle_availability_p}>В наличии </p>
										</div>

										<button className={s.filter_castle_button_2}>SALE </button></div>
									<div className={s.filter_castle_button_body3}>

										<button className={s.filter_castle_button_3}>
											<img src='app/img/podarok.png' /> Подарок </button>
									</div>

								</div>
								<div className={s.price_card}>
									<div className={s.price_card_reviews}>
										<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
										<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
									<div className={s.price_card_name}>
										<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
									</div>
									<div className={s.price_sum_card}>
										<p className={s.price_current_price_2}>33 000₽</p>
										<p className={s.price_old_price}>39 000₽</p>
									</div>


								</div>

							</div></div>
						<div className={s.history_carts}>
							<div className={s.product_cards}>

								<div className={s.filter_castle_3}>
									<div className={s.filter_castle_buttons}>
										<div className={s.filter_castle_availability} >
											<button className={s.filter_castle_button_1}>
												<img src='app/img/button_ok.png' />  </button>
											<p className={s.filter_castle_availability_p}>В наличии </p>
										</div>

										<button className={s.filter_castle_button_2}>SALE </button></div>
									<div className={s.filter_castle_button_body3}>

										<button className={s.filter_castle_button_3}>
											<img src='app/img/podarok.png' /> Подарок </button>
									</div>

								</div>
								<div className={s.price_card}>
									<div className={s.price_card_reviews}>
										<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
										<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
									<div className={s.price_card_name}>
										<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
									</div>
									<div className={s.price_sum_card}>
										<p className={s.price_current_price}>9 000₽</p>
										<p className={s.price_old_price}>12 000₽</p>
									</div>


								</div>









							</div>
						</div>
						<div className={s.history_carts}>
							<div className={s.product_cards}>

								<div className={s.filter_castle}>
									<div className={s.filter_castle_buttons}>
										<div className={s.filter_castle_availability} >
											<button className={s.filter_castle_button_1}>
												<img src='app/img/button_none.png' />  </button>
											<p className={s.filter_castle_availability_p}>Нет в наличии </p>
										</div>

										<button className={s.filter_castle_button_2}>SALE </button></div>
									<div className={s.filter_castle_button_body3}>

										<button className={s.filter_castle_button_3}>
											<img src='app/img/podarok.png' /> Подарок </button>
									</div>

								</div>
								<div className={s.price_card}>
									<div className={s.price_card_reviews}>
										<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
										<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
									<div className={s.price_card_name}>
										<p className={s.price_card_name_p}>Вариативный замок Golden Soft для отеля</p>
									</div>
									<div className={s.price_sum_card}>
										<p className={s.price_current_price}>7 000₽</p>
										<p className={s.price_old_price}>8 000₽</p>
									</div>


								</div>









							</div>
						</div>
						<div className={s.history_carts}>
							<div className={s.product_cards}>

								<div className={s.filter_castle_2}>
									<div className={s.filter_castle_buttons}>
										<div className={s.filter_castle_availability} >
											<button className={s.filter_castle_button_1}>
												<img src='app/img/button_ok.png' />  </button>
											<p className={s.filter_castle_availability_p}>В наличии </p>
										</div>

										<button className={s.filter_castle_button_2}>SALE </button></div>
									<div className={s.filter_castle_button_body3}>

										<button className={s.filter_castle_button_3}>
											<img src='app/img/podarok.png' /> Подарок </button>
									</div>

								</div>
								<div className={s.price_card}>
									<div className={s.price_card_reviews}>
										<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
										<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
									<div className={s.price_card_name}>
										<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
									</div>
									<div className={s.price_sum_card}>
										<p className={s.price_current_price_2}>33 000₽</p>
										<p className={s.price_old_price}>39 000₽</p>
									</div>


								</div>

							</div></div>
						<div className={s.history_carts}>
							<div className={s.product_cards}>

								<div className={s.filter_castle_3}>
									<div className={s.filter_castle_buttons}>
										<div className={s.filter_castle_availability} >
											<button className={s.filter_castle_button_1}>
												<img src='app/img/button_ok.png' />  </button>
											<p className={s.filter_castle_availability_p}>В наличии </p>
										</div>

										<button className={s.filter_castle_button_2}>SALE </button></div>
									<div className={s.filter_castle_button_body3}>

										<button className={s.filter_castle_button_3}>
											<img src='app/img/podarok.png' /> Подарок </button>
									</div>

								</div>
								<div className={s.price_card}>
									<div className={s.price_card_reviews}>
										<img className={s.price_card_reviews_img} src='app/img/рейтинг.png' />
										<p className={s.price_card_reviews_p}>(12) отзывов</p></div>
									<div className={s.price_card_name}>
										<p className={s.price_card_name_p}>Дверной Замок Golden Soft для<br /> офиса</p>
									</div>
									<div className={s.price_sum_card}>
										<p className={s.price_current_price}>9 000₽</p>
										<p className={s.price_old_price}>12 000₽</p>
									</div>


								</div>









							</div>
						</div>

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
					<div className={s.ceo_product_mobile_block}>
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

				</div>



			</div >
			<div className={s.ul_container} ><div className={s.ul}>
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
			</div></div>
			<div className={s.footer_body}>
				<div className={s.footer}>
					<div className={s.footer_logo}>
						<img
							className={s.footer_logo_img}
							src="app/img/Logo (5).png"
						/>
						<img
							className={s.footer_logo_img_2}
							src="app/img/Frame 4075216.png"
						/>


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
							<h1 className={s.footer_ul_p}>Телефоны</h1>

							<a className={s.footer_ul_a} href="#">
								+7 (988) 565 00 38
							</a>
							<br />
							<a className={s.footer_ul_a} href="#">
								+375 33 662 82 56
							</a>
							<h1 className={s.footer_ul_p}>Email</h1>
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
		</div >
	)
}
