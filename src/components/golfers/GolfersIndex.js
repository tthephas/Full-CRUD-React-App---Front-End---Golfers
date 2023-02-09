import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap"
import LoadingScreen from "../shared/LoadingScreen"

import { getAllGolfers } from "../../api/golfers";

import messages from "../shared/AutoDismissAlert/messages"

const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

// Golfer inded will make request to api for all golfers
// gets a response and then displays card for each golfer

const GolfersIndex = (props) => {
    const [golfers, setGolfers] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert } = props

    useEffect(() => {
        getAllGolfers()
            .then(res => setGolfers(res.data.golfers))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting golfers',
                    message: messages.getGolfersFailure,
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }

    if (!golfers) {
        return <LoadingScreen />
    } else if (golfers.length === 0) {
        return <p>No golfers yet, go add some!</p>
    }

    //once we get array. loop over it. 
    // make the cards
    const golferCards = golfers.map(golfer => (
        <Card key={ golfer.id } style={{ width: '30%', margin: 5}}>
            <Card.Header>
                { golfer.fullTitle}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/golfers/${golfer.id}`}
                    className="btn btn-info">View { golfer.name }
                    </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))
        //some jsx , container with all the golfers
    return (
        <div className="container-md" style={ cardContainerStyle }>
            { golferCards }
        </div>
    )
}


export default GolfersIndex