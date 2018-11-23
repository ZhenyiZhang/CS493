import axios from 'axios';
//search
import{GET_CLUBS, ADD_CLUB, DELETE_CLUB, CLUBS_LOADING, CLUBS_SEARCH} from './types';

export const getClubs = () => dispatch => {
dispatch(setClubsLoading());
axios
    .get('/api/clubs')
    .then(res=>
        dispatch({
            type: GET_CLUBS,
            payload: res.data
        })    
    )
};

export const deleteClub = (id) => dispatch =>{
    axios.delete(`/api/clubs/${id}`).then(res =>
        dispatch({
            type: DELETE_CLUB,
            payload: id
        })
    );
};

export const addClub = club => dispatch => {
    axios
    .post('/api/clubs', club)
    .then(res => 
        dispatch({
            type: ADD_CLUB,
            payload: res.data
        }))
};

export const setClubsLoading = () => {
    return {
        type: CLUBS_LOADING
    }
}

//search
export const searchClubs = (clubname) => dispatch => {
            dispatch({
                type: CLUBS_SEARCH,
                payload: clubname
            })
};