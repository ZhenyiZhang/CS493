import { GET_CLUBS, ADD_CLUB, DELETE_CLUB, CLUBS_LOADING, CLUBS_SEARCH} from '../actions/types';

const initialState = {
    clubs: [],
    loading: false
}



export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CLUBS:
        return{
            ...state,
            clubs: action.payload,
            loading: false
        }; 
        case DELETE_CLUB:
        return {
            ...state,
            clubs: state.clubs.filter(club => club._id !== action.payload)
        };
        case ADD_CLUB:
            return{
            ...state,
            clubs: [action.payload, ...state.clubs]
            };
        case CLUBS_LOADING:
            return{
                ...state,
                loading: true
            };
        //search
        //club.name === action.payload   
        case CLUBS_SEARCH:
            return{
                ...state,
                clubs: state.clubs.filter(club => club.name.toLowerCase().startsWith(action.payload.toLowerCase()))
            }
        default:
        return state;
    }
}