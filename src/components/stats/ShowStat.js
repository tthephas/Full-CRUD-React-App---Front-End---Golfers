import { Card, Button } from 'react-bootstrap'

const ShowStat = (props) => {
    const { stat } = props

    return (
    <>
        <Card className='m-2'>
            <Card.Body>
                Wins: {stat.wins}
                Losses: {stat.losses}
                Career Earnings: {stat.earnings}
            </Card.Body>
        </Card>
    </>
    )    
}
export default ShowStat