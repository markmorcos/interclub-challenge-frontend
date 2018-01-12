import {
  GET_MEMBERS,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_FAIL,
  GET_MEMBER,
  GET_MEMBER_SUCCESS,
  GET_MEMBER_FAIL
} from './types';
import axios from 'axios';
import { baseURL } from '../config';

const api = axios.create({ baseURL });

const getMembersSuccess = (dispatch, members) => {
  dispatch({ type: GET_MEMBERS_SUCCESS, payload: members });
};

const getMembersFail = (dispatch, error) => {
  dispatch({ type: GET_MEMBERS_FAIL });
};

export const getMembers = () => {
  return dispatch => {
    dispatch({ type: GET_MEMBERS });
    api.get('members')
    .then(response => {
      if (response.data.status) {
        return getMembersFail(dispatch, 'Get members failed');
      }
      return getMembersSuccess(dispatch, response.data);
    })  
    .catch(() => getMembersFail(dispatch, 'Get members failed'));
  };
};

const getMemberSuccess = (dispatch, members) => {
  dispatch({ type: GET_MEMBER_SUCCESS, payload: members });
};

const getMemberFail = (dispatch, error) => {
  dispatch({ type: GET_MEMBER_FAIL });
};

export const getMember = (id) => {
  return dispatch => {
    dispatch({ type: GET_MEMBER });
    api.get(`members/${id}`)
    .then(response => {
      if (response.data.status) {
        return getMemberFail(dispatch, 'Get member failed');
      }
      return getMemberSuccess(dispatch, response.data);
    })  
    .catch(() => getMemberFail(dispatch, 'Get member failed'));
  };
};
