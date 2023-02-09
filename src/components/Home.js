import GolfersIndex from "./golfers/GolfersIndex"
import { Container } from "react-bootstrap"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
		<Container className='m-2' style={{textAlign:'center'}}>

			<h2>See All of the Golfers</h2>
			<GolfersIndex msgAlert={ props.msgAlert } />
		</Container>
		</>
	)
}

export default Home
