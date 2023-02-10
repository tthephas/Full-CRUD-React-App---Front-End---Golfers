// golfers resource here
import apiUrl from '../apiConfig'
import axios from 'axios'



//READ  -- index

export const getAllGolfers = () => {
    return axios(`${apiUrl}/golfers`)
}

//READ  -- show

export const getOneGolfer = (id) => {
    return axios(`${apiUrl}/golfers/${id}`)
}

// CREATE  -- create a golfer

export const createGolfer = (user, newGolfer) => {
    console.log('this is the new user', user)
    console.log('this is the new golfer', newGolfer)
    return axios({
        url: `${apiUrl}/golfers`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { golfer: newGolfer }
    })
}
// UPDATE -- update a golfer
export const updateGolfer = (user, updatedGolfer) => {
    return axios({
        ulr: `${apiUrl}/golfers/${updatedGolfer.id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        }, 
        data: { golfer: updatedGolfer }
    })
}

// DELETE -- delete a golfer

export const removeGolfer = {user, golferId} => {
    return axios({
        url: `${apiUrl}/golfers/${golferId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

