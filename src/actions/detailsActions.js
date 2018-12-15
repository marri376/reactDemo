  
  export const FETCH_DETAILS_BEGIN = "FETCH_DETAILS_BEGIN";

  export const FETCH_DETAILS_SUCCESS ="FETCH_DETAILS_SUCCESS";
  export const FETCH_DETAILS_FAILURE = "FETCH_DETAILS_FAILURE";
  
  export const fetchDetailsBegin = () => ({
    type: FETCH_DETAILS_BEGIN
  });
  
  export const fetchDetailsSuccess = details => ({
    type: FETCH_DETAILS_SUCCESS,
    payload: { details }
  });
  
  export const fetchDetailsFailure = error => ({
    type: FETCH_DETAILS_FAILURE,
    payload: { error }
  });
  
  export function fetchDetails() {
    return function (dispatch) {
      dispatch(fetchDetailsBegin());
       return fetch(`http://ergast.com/api/f1/2018/circuits.json`)
       .then( res => res.json( ) )
       .then( res => {
        dispatch(fetchDetailsSuccess(res.MRData.CircuitTable.Circuits));
        
      }) 
       
    };
   }

   