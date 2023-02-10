import apiUrl from '../apiConfig'
import axios from 'axios'


//CREATE
// / STATS / GOLFERID
export const createStat = (golferId, newStat) => {
    return axios({
        url: `${apiUrl}/stats/${golferId}`,
        method: 'POST',
        data: { stat: newStat}
    })
}

// UPDATE
// /STATS / GOLFERID / STAT ID
export const updateStat = (user, golferId, updatedStat) => {
    return axios({
        url: `${apiUrl}/stats/${golferId}/${updatedStat._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { stat: updatedStat }
    })
}

//DELETE
// /STATS / GOLFERID / STAT ID
export const deleteStat = (user, golferId, statId) => {
    return axios({
        url: `${apiUrl}/stats/${golferId}/${statId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
