import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button } from 'react-bootstrap'
import { getOneGolfer, removeGolfer, updateGolfer } from "../../api/golfers";
import messages from "../shared/AutoDismissAlert/messages";
//import LoadingScreen from "../shared/LoadingScreen";
import EditGolferModal from "./EditGolferModal";


const ShowGolfer = (props) => {
    const [golfer, setGolfer] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

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
    }, [updated])

    const letGolferGo = () => {
        removeGolfer(user, golfer.id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeGolferSucces,
                    variant: 'success'
                })
            })
            .then(() => {navigate('/')})
            .catch(err => {
                msgAlert({
                    heading: 'Error',
                    message: messages.removeGolferFailure,
                    variant: 'danger'
                })
            })
    }

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
                    <Card.Footer>
                        {/* <Button
                            className='m-2'
                            variant='info'
                            onClick={() => setStatModalShow(true)}
                        >Give {golfer.name} some stats!

                        </Button> */}
                        {
                            golfer.owner && user && golfer.owner._id === user._id ? 
                            <>
                                <Button
                                    className="m-2"
                                    variant='warning'
                                    onClick={() =>
                                    setEditModalShow(true)}
                                    >
                                    Edit {golfer.name}
                                </Button>
                                <Button 
                                    className="m-2"
                                    variant='danger'
                                    onClick={() => letGolferGo()}
                                >
                                    Let {golfer.name} Go
                                </Button>
                            </>
                            :
                            null
                        }
                    </Card.Footer>
                </Card>
            </Container>
            <EditGolferModal
                user={user}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
                updateGolfer={updateGolfer}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                golfer={golfer}
            />
        </>
    )
}

export default ShowGolfer