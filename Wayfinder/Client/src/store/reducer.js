const initialState = {
  az: false,
  za: false,
  isAuth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AtoZ':
      return {
        ...state,
        az: !state.az,
        za: false,
      };
    case 'ZtoA':
      return {
        ...state,
        az: false,
        za: !state.za,
      };
    case 'SIGN_IN':
      return {
        ...state,
        isAuth: action.token !== null,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default reducer
