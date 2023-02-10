import { Card, Button } from 'react-bootstrap'
import { deleteStat } from '../../api/stats'

const ShowStat = (props) => {
    const { stat } = props


    const deleteStat = () => {
        eraseStat(user, golfer.id, stat.id)
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
                    onClick={() => deleteStat()}
                    variant='danger'
                    className='m-2'
                >
                    Delete Stat
                </Button>
            </Card.Footer>
        </Card>
    </>
    )    
}
export default ShowStat