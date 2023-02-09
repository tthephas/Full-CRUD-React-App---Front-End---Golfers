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
// UPDATE -- update a golfer
// DELETE -- delete a golfer

