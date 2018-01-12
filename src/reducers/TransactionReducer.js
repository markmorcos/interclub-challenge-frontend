import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  transactions: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return { ...state, loading: true };
    case GET_TRANSACTIONS_SUCCESS:
      return { ...state, transactions: action.payload, loading: false };
    case GET_TRANSACTIONS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
