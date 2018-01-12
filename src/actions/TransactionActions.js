import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAIL
} from './types';
import axios from 'axios';
import { baseURL } from '../config';

const api = axios.create({ baseURL });

const getTransactionsSuccess = (dispatch, transactions) => {
  dispatch({ type: GET_TRANSACTIONS_SUCCESS, payload: transactions });
};

const getTransactionsFail = (dispatch, error) => {
  dispatch({ type: GET_TRANSACTIONS_FAIL });
};

export const getTransactions = (memberId) => {
  return dispatch => {
    dispatch({ type: GET_TRANSACTIONS });
    api.get(`transactions/${memberId}`)
    .then(response => {
      if (response.data.status) {
        return getTransactionsFail(dispatch, 'Get transactions failed');
      }
      return getTransactionsSuccess(dispatch, response.data);
    })  
    .catch(() => getTransactionsFail(dispatch, 'Get transactions failed'));
  };
};
