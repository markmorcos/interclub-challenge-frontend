import { combineReducers } from 'redux';
import MemberReducer from './MemberReducer';
import TransactionReducer from './TransactionReducer';

export default combineReducers({
  memberReducer: MemberReducer,
  transactionReducer: TransactionReducer
});
