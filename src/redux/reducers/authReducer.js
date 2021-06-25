import { AUTH_TOKEN } from '../../utils/constants';
import * as actionType from '../action-types/auth-types';

const initialState = {
  error: null,
  isAuthenticated: localStorage.getItem(AUTH_TOKEN) !== null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_AUTH_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
