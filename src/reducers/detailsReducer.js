import {
    FETCH_DETAILS_BEGIN,
    FETCH_DETAILS_SUCCESS,
    FETCH_DETAILS_FAILURE
  } from "../actions/detailsActions";
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function DetailsReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case FETCH_DETAILS_BEGIN:
        
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case  FETCH_DETAILS_SUCCESS:
                return {
          ...state,
          loading: false,
          items: action.payload.details
        };
  
      case FETCH_DETAILS_FAILURE:
      
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        
        return state;
    }
  }
  