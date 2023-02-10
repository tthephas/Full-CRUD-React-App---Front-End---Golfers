import { Form, Button, Container } from 'react-bootstrap'

const StatForm = (props) => {
    const { stat, handleChange, handleSubmit, heading } = props
    return (
        <Container className='justify-content-center'>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group
                className='m-2'>
                    <Form.Label>Wins:</Form.Label>
                    <Form.Control
                        placehoder="How many wins?"
                        name="wins"
                        id="wins"
                        value={ stat.wins}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group
                className='m-2'>
                    <Form.Label>Losses:</Form.Label>
                    <Form.Control
                        placehoder="How many losses?"
                        name="losses"
                        id="losses"
                        value={ stat.losses}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group
                className='m-2'>
                    <Form.Label>Career Earnings:</Form.Label>
                    <Form.Control
                        placehoder="How much have they earned?"
                        name="earnings"
                        id="earnings"
                        value={ stat.earnings}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className='m-2' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default StatForm