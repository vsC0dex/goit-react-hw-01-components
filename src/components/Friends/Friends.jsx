import PropTypes from 'prop-types';

import { Avatar, FriendsList, Item, Name, Status } from './Friends.styled';

export const Friends = ({ friends }) => {
  console.log(friends);
  return (
    <FriendsList>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status isOnline={friend.isOnline}></Status>
          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </FriendsList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
