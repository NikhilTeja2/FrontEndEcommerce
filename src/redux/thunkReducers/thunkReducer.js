

import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SIGNUP_FAILURE,SIGNUP_SUCCESS,SIGNUP_REQUEST,LOGOUT_REQUEST } from "../thunkActions/actions";

const initialState = {
    users: [],
    isLoading: false,
    error: null,
    currentUser:null
}

export const thunkReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: [...state.users,action.payload],
                currentUser:action.payload.userName

            }

        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        
        case LOGOUT_REQUEST:
            return{
                ...state,
                currentUser:null
            }
        default:
            return state;
    }
}