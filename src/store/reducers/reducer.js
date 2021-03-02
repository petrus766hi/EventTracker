import {
  ADD_TO_TRACKER,
  REMOVE_TO_TRACKER,
  CLEAR_TRACKER,
  CHANGE_AUTH,
} from '../reducers/constans';

const INITIAL_STATE = {
  data: [],
  isAuth: true,
};

const auth = (state = INITIAL_STATE.data, action) => {
  switch (action.type) {
    case ADD_TO_TRACKER:
      return [...state, action.payload];
    case REMOVE_TO_TRACKER:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

const user = (state = INITIAL_STATE.isAuth, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return {
        ...state,
        isAuth: !state.isAuth,
      };
    default:
      return state;
  }
};

export {auth, user};
