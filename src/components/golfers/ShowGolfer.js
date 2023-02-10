import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { Container, Card, Button } from 'react-bootstrap'

import { getOneGolfer, removeGolfer, updateGolfer } from "../../api/golfers";

import messages from "../shared/AutoDismissAlert/messages";

import LoadingScreen from "../shared/LoadingScreen";

const ShowGolfer = (props) => {
    const [golfer, setGolfer] = useState(null)

    const { id } = useParams()

    const { user, msgAlert } = props
    console.log('user in showGolfer props', user)
    console.log('msgAlert in showGolfer props', msgAlert)

    useEffect(() => {
        getOneGolfer(id)
            .then(res => setGolfer(res.data.golfer))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting golfers',
                    message: messages.getGolfersFailure,
                    variant: 'danger'
                })
            })
    }, [])

    if (!golfer) {
        return <p>loading...</p>
    }
    return (
        <>
            <Container>
                <Card>
                    <Card.Header>
                        { golfer.fullTitle }
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div>
                                <small>
                                    Tour: { golfer.tour}
                                </small>
                            </div>
                            <div>
                                <small>
                                    Tenure: { golfer.tenure }
                                </small>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default ShowGolfer