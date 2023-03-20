import PropTypes from 'prop-types';

import { FriendsList, Item } from './Friends.styled';
import FriendListItem from '../FriendListItem/FriendListItem';
export const Friends = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Item key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
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
