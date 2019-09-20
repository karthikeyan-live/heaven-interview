import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      isMale: true
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      isMale: true
    },
    {
      name: 'George Washington',
      starred: false,
      isMale: true
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== action.id)
      };
    case types.STAR_FRIEND:
      {
        let friends = [...state.friendsById];
        let friend = friends.find((item, index) => index === action.id);
        friend.starred = !friend.starred;
        return {
          ...state,
          friendsById: friends
        };
      }
    case types.TOGGLE_FRIEND_SEX:
      {
        let friends = [...state.friendsById];
        let friend = friends.find((item, index) => index === action.id);
        friend.isMale = !friend.isMale;
        return {
          ...state,
          friendsById: friends
        };
      }

    default:
      return state;
  }
}
