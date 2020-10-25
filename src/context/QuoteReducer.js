import { SET_QUOTE } from '../types/quoteTypes';

export default (state, action) => {
  switch (action.type) {
    case SET_QUOTE:
      return {
        ...state,
        quote: action.payload
      };
    default:
      return state;
  }
};
