import {
  ADD_TO_TRACKER,
  REMOVE_TO_TRACKER,
  CLEAR_TRACKER,
  CHANGE_AUTH,
} from '../reducers/constans';

export const addToTracker = (payload) => {
  return {
    type: ADD_TO_TRACKER,
    payload,
  };
};
export const removeToTracker = (payload) => {
  return {
    type: REMOVE_TO_TRACKER,
    payload,
  };
};

export const changeAuth = (payload) => {
  return {
    type: CHANGE_AUTH,
    payload,
  };
};
