import { Form, Button, Container } from 'react-bootstrap'

const GolferForm = (props) => {
    const { golfer, handleChange, handleSubmit, heading } = props
    return (
        <Container className='justify-content-center'>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <Form.Label>
                        Name:
                    </Form.Label>
                    <Form.Control
                        placeholder="What is your golfer's name?"
                        name="name"
                        id="name"
                        value= { golfer.name }
                        onChange={handleChange}
                    />
                 </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>
                        Tour:
                    </Form.Label>
                    <Form.Control
                        placeholder="What tour does your golfer play on?"
                        name="tour"
                        id="tour"
                        value= { golfer.tour }
                        onChange={handleChange}
                    />
                 </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>
                        Tenure:
                    </Form.Label>
                    <Form.Control
                        placeholder="How many years has your golfer played professionally?"
                        name="tenure"
                        id="tenure"
                        value= { golfer.tenure }
                        onChange={handleChange}
                    />
                 </Form.Group>
                 <Button 
                    className='m-2' 
                    type='submit'>
                        Submit
                 </Button>

            </Form>
        </Container>
    )
}

export default GolferForm