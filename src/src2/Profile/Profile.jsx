import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './My Post/ProfileInfo/ProfileInfo';
import MyPostsContainer from './My Post/MyPostsConateiner';
import { Col, Container, Row } from 'react-bootstrap';
import Posts from './My Post/Post/Posts';


const Profile = ({profile,contactLinks,status,updateStatus,isOwner,savePhoto}) => {
  return (
    <div>
      <ProfileInfo 
      isOwner={isOwner}
      profile={profile} 
      contactLinks={contactLinks} 
      status={status}
      updateStatus={updateStatus}
      savePhoto={savePhoto}
      />
     <MyPostsContainer/>
     
    </div>

  );
};

export default Profile;
