import * as types from '../constants/ActionTypes';

export function changeActivePage(pageNumber) {
  return {
    type: types.CHANGE_ACTIVE_PAGE,
    pageNumber
  };
}
