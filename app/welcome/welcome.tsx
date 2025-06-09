
import s from './welcome.module.css'
import Header from './Header/header'
import Container from './BodyContainer/Container'
import Footer from './Footer/footer'
import UlContainer from './UlContainer/UlContainer'



export function Welcome() {

	return (
		
		<div className={s.body}>
			<Header />
			<Container />
			<UlContainer />
			<Footer />
		</div >
	)
}
