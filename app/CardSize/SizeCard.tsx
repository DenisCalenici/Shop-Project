
import s from '../welcome/welcome.module.css'
import Header from '../welcome/Header/header'
import Container from '../welcome/BodyContainer/Container'
import Footer from '../welcome/Footer/footer'
import UlContainer from '../welcome/UlContainer/UlContainer'



export function SizeCard() {

	return (
		<div className={s.body}>
			<Header />
			<div>здесь будет карточка с товаром </div>
			<UlContainer />
			<Footer />
		</div >
	)
}
