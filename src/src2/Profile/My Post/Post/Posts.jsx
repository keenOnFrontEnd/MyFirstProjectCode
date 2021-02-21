import React from 'react';
import { connect } from 'react-redux';
import PostContainer from './PostContainer';
import s from './Posts.module.css';
const Posts = (posts) => {
    
    let postElements = posts.map(p => <PostContainer message={p.message} key={p} />);
    return (
        <div className={s.posts_}>
        <div className={s.posts}>
            Posts:
           {postElements}
          </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData
    }
}
export default connect (mapStateToProps, {})(Posts);