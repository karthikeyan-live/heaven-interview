import friendlist from './friendlist';
import * as friendListActions from '../actions/FriendListActions';

describe('friend list - reducer test', () => {
    it('should create a CHANGE_ACTIVE_PAGE action', () => {
        // arrange
        const initialPageNumber = 2;
        const newPageNumber = 1;
        const action = friendListActions.changeActivePage(newPageNumber);

        // act
        const newState = friendlist(initialPageNumber, action);

        // assert
        expect(newState['activePageOfFriendList']).toEqual(newPageNumber);
    });
})