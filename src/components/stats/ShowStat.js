import { Card, Button } from 'react-bootstrap'
import { deleteStat } from '../../api/stats'
//import EditGolferModal from '../golfers/EditGolferModal'
import { useState } from 'react'
import EditStatModal from './EditStatModal'

const ShowStat = (props) => {
    const { stat, user, golfer, msgAlert, triggerRefresh } = props

    const [editModalShow, setEditModalShow] = useState(false)

    const eraseStat = () => {
        //maybe need _id
        deleteStat(user, golfer.id, stat._id)
            .then(() => {
                msgAlert({
                    heading: 'Stat deleted',
                    message: 'Bye stat',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh no',
                    message: 'Something went wrong',
                    variant: 'danger'
                })
            })

    }
    return (
    <>
        <Card className='m-2'>
            <Card.Body>
                Wins: {stat.wins}<br/>
                Losses: {stat.losses}<br/>
                Career Earnings: {stat.earnings}
            </Card.Body>
            <Card.Footer>
                <Button
                    onClick={() => setEditModalShow(true)}
                    variant='warning'
                    className='m-2'
                >
                    Edit Stat
                </Button>
                <Button
                    onClick={() => eraseStat()}
                    variant='danger'
                    className='m-2'
                >
                    Delete Stat
                </Button>
            </Card.Footer>
        </Card>
        <EditStatModal
            user={user}
            golfer={golfer}
            stat={stat}
            show={editModalShow}
            handleClose={() => setEditModalShow(false)}
            msgAlert={msgAlert}
            triggerRefresh={triggerRefresh}
        />
    </>
    )    
}
export default ShowStat