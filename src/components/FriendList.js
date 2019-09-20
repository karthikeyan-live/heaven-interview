import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  render () {
    const startItemIndexOfPage = this.props.itemsCountPerPage * (this.props.activePage - 1);
    const endItemIndexOfPage = (this.props.itemsCountPerPage * this.props.activePage) - 1;

    return (
      <ul className={styles.friendList}>
        {
          this.props.friends.map((friend, index) => {
            return (
              (index >= startItemIndexOfPage && index <= endItemIndexOfPage) &&
              <FriendListItem
                key={index}
                id={index}
                name={friend.name}
                starred={friend.starred}
                isMale={friend.isMale}
                {...this.props.actions} />
            );
          })
        }
      </ul>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  activePage: PropTypes.number.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
