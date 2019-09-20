import React from 'react';
import renderer from 'react-test-renderer';
import friendsById from '../../tools/mockData';
import { FriendListApp } from './FriendListApp';

function renderFriendListApp(args) {
    let defaultProps = {
        friendlist: friendsById,
        itemsCountPerPage: 2,
        changeActivePage: jest.fn(),
        starFriend: jest.fn(),
        deleteFriend: jest.fn(),
        toggleFriendSex: jest.fn(),
        addFriend: jest.fn()
    };

    const props = { ...defaultProps, ...args };
    return renderer.create(<FriendListApp {...props} />)
}

describe('friend list app - connected component test', () => {

    it('render with mock data', () => {
        const component = renderFriendListApp();
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('navigate to 2nd page', () => {
        const component = renderFriendListApp({ friendlist: { ...friendsById, activePageOfFriendList: 2 } });
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('if friend list is empty legend should be "0 of 0"', () => {
        const component = renderFriendListApp({ friendlist: { ...friendsById, friendsById: [] } });
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
})