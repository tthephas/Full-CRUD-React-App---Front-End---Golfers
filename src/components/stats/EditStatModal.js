import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import StatForm from '../shared/StatForm'
import { updateStat } from '../../api/stats'
//import messages from '../shared/AutoDismissAlert/messages'

const EditStatModal = (props) => {
    const { user, golfer, show, handleClose, msgAlert, triggerRefresh } = props

    const [stat, setStat] = useState(props.stat)

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
        createStat(user, golfer.id, stat)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Updated stat!',
                    message: 'You updated the stat!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Uh oh',
                    message: 'Something went wrong',
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
                    heading='Update the stat'
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditStatModal