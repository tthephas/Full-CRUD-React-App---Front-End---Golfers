import { useState } from 'react'
import { createGolfer } from '../../api/golfers'
import { createGolferSuccess, createGolferFailure } from '../shared/AutoDismissAlert/messages'
import GolferForm from '../shared/GolferForm'
import { useNavigate } from 'react-router-dom'

const CreateGolfer = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()
    console.log('this is navigate', navigate)

    const [golfer, setGolfer] = useState({
        name: '',
        tour: '',
        tenure: ''
    })

    const onChange = (e) => {
        e.persist()

        setGolfer(prevGolfer => {
            const updatedName = e.target.name
            let updatedValue = e.target.value
            //need?
            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }
            const updatedGolfer = {
                [updatedName] : updatedValue
            }
            return {
                ...prevGolfer, ...updatedGolfer
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        createGolfer(user, golfer)
        .then(res => { navigate(`/golfers/${ res.data.golfer.id }`)})
        .then(() => {
            msgAlert({
                heading: 'Yeah!',
                message: createGolferSuccess,
                variant: 'success'
            })
        })
        .catch(() => {
            msgAlert({
                heading: 'Oh no!',
                message: createGolferFailure,
                variant: 'danger'
            })
        })
    }
    return (
        <GolferForm
            golfer={golfer}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading="Add a new golfer!"
        />
    )
}

export default CreateGolfer