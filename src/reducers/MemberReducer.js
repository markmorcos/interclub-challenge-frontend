import {
  GET_MEMBERS,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_FAIL,
  GET_MEMBER,
  GET_MEMBER_SUCCESS,
  GET_MEMBER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  members: [],
  member: { number: '', first_name: '', last_name: '' },
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MEMBERS:
      return { ...state, loading: true };
    case GET_MEMBERS_SUCCESS:
      return { ...state, members: action.payload, loading: false };
    case GET_MEMBERS_FAIL:
      return { ...state, loading: false };
    case GET_MEMBER:
      return { ...state, loading: true };
    case GET_MEMBER_SUCCESS:
      return { ...state, member: action.payload, loading: false };
    case GET_MEMBER_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
