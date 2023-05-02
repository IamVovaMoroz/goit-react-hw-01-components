import React from 'react';
import PropTypes from 'prop-types';
import {Block, ProfileItem, ProfileList, ProfileName, ProfileImg} from "./Profile.styled.jsx"
// import css from "./Event.module.css"


 const Profile = ({username, tag, location, avatar, stats}) => {
    return (
      <Block className="profile">
        <div className="description">
          <ProfileImg
            src={avatar}
            alt="User avatar"
            className="avatar"
          />
          <ProfileName className="name">{username}</ProfileName>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
  
        <ProfileList className="stats">
          <ProfileItem>
            <span className="label">Followers: </span>
            <span className="quantity">{stats.followers}</span>
          </ProfileItem>
          <ProfileItem>
            <span className="label">Views: </span>
            <span className="quantity">{stats.views}</span>
          </ProfileItem>
          <ProfileItem>
            <span className="label">Likes: </span>
            <span className="quantity">{stats.likes}</span>
          </ProfileItem>
        </ProfileList>
      </Block>
    );
  }
  
  export default Profile;

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired})

  }
