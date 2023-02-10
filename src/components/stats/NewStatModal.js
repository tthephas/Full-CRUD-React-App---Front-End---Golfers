import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import StatForm from '../shared/StatForm'
import { createStat } from '../../api/stats'
import messages from '../shared/AutoDismissAlert/messages'

const NewStatModal = (props) => {
    const { user, golfer, show, handleClose, msgAlert, triggerRefresh } = props

    const [stat, setStat] = useState({})

    const onChange = (e) => {
        e.persist()

        setStat(prevStat => {
            // do i need this?
            const updatedName = e.target.name
            let updatedValue = e.target.value

            const updatedStat = {
                [updatedName] : updatedValue
            }

            return {
                ...prevStat, ...updatedStat
            }

        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        createStat(golfer.id, stat)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Updated stat!',
                    message: messages.createStatSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Uh oh',
                    message: messages.createStatFailure,
                    variant: 'danger'
                })
            })
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <StatForm
                    stat={stat}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading={`Give ${golfer.name} some stats!`}
                />
            </Modal.Body>
        </Modal>
    )
}

export default NewStatModal