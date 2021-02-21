import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{

     return{
      posts: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
     }
   }
  



const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator})(MyPosts);


export default MyPostsContainer;