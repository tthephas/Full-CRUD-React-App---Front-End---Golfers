import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import GolferForm from '../shared/GolferForm'
import messages from '../shared/AutoDismissAlert/messages'

const EditGolferModal = (props) => {
    const { user, show, handleClose, updateGolfer, msgAlert, triggerRefresh } = props

    const [golfer, setGolfer] = useState(props.golfer)

    const onChange = (e) => {
        e.persist()

        setGolfer(prevGolfer => {
            const updatedName = e.target.name 
            let updatedValue = e.target.value
            console.log('prev golfer', updatedName)
            console.log('updated golfer ', updatedValue)
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

        updateGolfer(user, golfer)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Good to go!',
                    message: messages.updateGolferSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'oh no!',
                    message: messages.updateGolferFailure,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <GolferForm
                    golfer={golfer}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading="Update Golfer"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditGolferModal