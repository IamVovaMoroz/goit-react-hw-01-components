import React from 'react';
import PropTypes from 'prop-types';
import {ListItem, FriendStatus} from "./FriendListItem.styled.jsx"


 const FriendListItem = ({ avatar, name, isOnline }) => (
    <ListItem className="item">

       <FriendStatus isOnline={isOnline} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
  
  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

  export default FriendListItem