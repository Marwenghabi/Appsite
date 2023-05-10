const initialState = {
    lang: 'en', // langue par défaut
  };
  
  export default function sessionReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_LANG':
        return {
          ...state,
          lang: action.payload,
        };
      default:
        return state;
    }
  }
  