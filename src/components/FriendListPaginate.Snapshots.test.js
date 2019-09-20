import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import FriendListPaginate from './FriendListPaginate';

function renderFriendListPaginate(args) {
    let defaultProps = {
        activePage: 1,
        itemsCountPerPage: 2,
        totalItemsCount: 3,
        changeActivePage: jest.fn()
    };
    const props = { ...defaultProps, ...args };
    return renderer.create(<FriendListPaginate {...props} />)
}
describe('friend list paginate - snapshot test', () => {
    it('with default props component is rendered', () => {
        const component = renderFriendListPaginate();
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('navigate to 2nd page and check if legend updated', () => {
        const component = renderFriendListPaginate({ activePage: 2 });
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
})