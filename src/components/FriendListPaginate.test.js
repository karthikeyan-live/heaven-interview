import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FriendListPaginate from './FriendListPaginate';

afterEach(cleanup);

function renderFriendListPaginate(args) {
    let defaultProps = {
        activePage: 1,
        itemsCountPerPage: 2,
        totalItemsCount: 3,
        changeActivePage: jest.fn()
    };
    const props = { ...defaultProps, ...args };
    return render(<FriendListPaginate {...props} />)
}

describe('friend list paginate - unit test', () => {
    it('with 3 default items 2 page should be displayed and page 1 is active', () => {
        const { getByText } = renderFriendListPaginate();
        expect(getByText('1 of 2')).toBeInTheDocument();
    });
    it('number of pages is 5 if total items count is 10', () => {
        const { getByText } = renderFriendListPaginate({ totalItemsCount: 10 });
        expect(getByText('1 of 5')).toBeInTheDocument();
    });
    it('display 2nd page by default', () => {
        const { getByText } = renderFriendListPaginate({ totalItemsCount: 10, activePage: 2 });
        expect(getByText('2 of 5')).toBeInTheDocument();
    });
    it('total page should be 4 if total items count is 10 and items per page is 3', () => {
        const { getByText } = renderFriendListPaginate({ totalItemsCount: 10, itemsCountPerPage: 3 });
        expect(getByText('1 of 4')).toBeInTheDocument();
    });
    it('total page should be 3 if total items count is 9 and items per page is 3', () => {
        const { getByText } = renderFriendListPaginate({ totalItemsCount: 9, itemsCountPerPage: 3 });
        expect(getByText('1 of 3')).toBeInTheDocument();
    });

    it('total page should be 3 if total items count is 9 and items per page is 3', () => {
        const { getByText } = renderFriendListPaginate({ totalItemsCount: 9, itemsCountPerPage: 3 });
        expect(getByText('1 of 3')).toBeInTheDocument();
    });

    it('check if fast backward button located correctly', () => {
        const { container } = renderFriendListPaginate({ totalItemsCount: 10, itemsCountPerPage: 3 });
        const childNode = container.firstChild.firstChild.childNodes[0].firstChild;
        expect(childNode).toHaveClass('fa-fast-backward')
    });

    it('check if backward button located correctly', () => {
        const { container } = renderFriendListPaginate({ totalItemsCount: 10, itemsCountPerPage: 3 });
        const childNode = container.firstChild.firstChild.childNodes[1].firstChild;
        expect(childNode).toHaveClass('fa-backward')
    });

    it('check if the paging legend located correctly', () => {
        const { container } = renderFriendListPaginate({ totalItemsCount: 10, itemsCountPerPage: 3 });
        const childNode = container.firstChild.childNodes[1];
        expect(childNode.textContent).toEqual('1 of 4')
        expect(childNode).toBeInstanceOf(HTMLElement)
    });

    it('check if fast forward button located correctly', () => {
        const { container } = renderFriendListPaginate({ totalItemsCount: 10, itemsCountPerPage: 3 });
        const childNode = container.firstChild.childNodes[2].childNodes[0].firstChild;
        expect(childNode).toHaveClass('fa-forward')
    });

    it('check if backward button located correctly', () => {
        const { container } = renderFriendListPaginate({ totalItemsCount: 10, itemsCountPerPage: 3 });
        const childNode = container.firstChild.childNodes[2].childNodes[1].firstChild;
        expect(childNode).toHaveClass('fa-fast-forward')
    });
})