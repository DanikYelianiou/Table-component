import * as ActionTypes from './constants';

export const tableData = (payload) => ({
  type: ActionTypes.TABLE_DATA,
  payload,
});

export const tableHead = (payload) => ({
  type: ActionTypes.TABLE_HEAD,
  payload,
});
