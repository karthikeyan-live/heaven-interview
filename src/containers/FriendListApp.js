import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import { addFriend, deleteFriend, starFriend, toggleFriendSex } from '../actions/FriendsActions';
import { changeActivePage } from '../actions/FriendListActions';
import { FRIEND_LIST_ITEMS_COUNT_PER_PAGE as itemsCountPerPage } from '../constants/ActionTypes';
import { FriendList, AddFriendInput, FriendListPaginate } from '../components';

class FriendListApp extends Component {

  render() {
    const { friendlist: { friendsById } } = this.props;
    const { friendlist: { activePageOfFriendList } } = this.props;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend,
      toggleFriendSex: this.props.toggleFriendSex,
      changeActivePage: this.props.changeActivePage
    };

    const paging = {
      activePage: activePageOfFriendList,
      itemsCountPerPage: itemsCountPerPage,
      totalItemsCount: friendsById.length
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions}  {...paging} />
        <FriendListPaginate {...paging} changeActivePage={actions.changeActivePage} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  toggleFriendSex,
  changeActivePage
})(FriendListApp)
