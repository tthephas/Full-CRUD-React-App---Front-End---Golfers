import GolfersIndex from "./golfers/GolfersIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>See All of the Golfers</h2>
			<GolfersIndex msgAlert={ props.msgAlert } />
		</>
	)
}

export default Home
