import * as friendListActions from './FriendListActions';
import * as types from '../constants/ActionTypes';

describe('friend list - actions test', () => {
    it('should create a CHANGE_ACTIVE_PAGE action', () => {
        // arrange
        const pageNumber = 2;
        const expectedAction = {
            type: types.CHANGE_ACTIVE_PAGE,
            pageNumber: pageNumber
        };

        // act
        const action =friendListActions.changeActivePage(pageNumber);

        // assert
        expect(action).toEqual(expectedAction);
    });
})