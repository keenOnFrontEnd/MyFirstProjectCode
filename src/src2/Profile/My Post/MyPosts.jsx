import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import s from './MyPosts.module.css';

import PostContainer from './Post/PostContainer';
import { AddPostFormRedux } from './PostsForm';


const MyPosts = ({addPostActionCreator,posts}) => {

  let AddPost = (values) => {
    addPostActionCreator(values.post);
  };

  let postElements =  posts.map(p => <PostContainer message={p.message} key={p} />);

  return ( 
    <div className={s.post_box}>
      <div className={s.my_post_wrapper}>
        <div className={s.my_post}>
          <h2>My post</h2>
        <AddPostFormRedux onSubmit={AddPost}/>
        </div>
      </div>
      <div className={s.posts_wrapper}>
      <div className={s.posts}>
          Posts:
         {postElements}

        </div>
      </div>
    </div>
  );
};





export default MyPosts;