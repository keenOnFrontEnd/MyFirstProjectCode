import React from 'react';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, savePhoto, setUserProfile, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';
import facebook from '../../files/photos/profileContactIcons/facebook-icon.png'
import github from '../../files/photos/profileContactIcons/github-icon.png'
import instagram from '../../files/photos/profileContactIcons/instagram-icon.png'
import twitter from '../../files/photos/profileContactIcons/twitter-icon.png'
import vk from '../../files/photos/profileContactIcons/vk-icon.png'
import youtube from '../../files/photos/profileContactIcons/youtube-icon.png'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import s from "./Profile.module.css"


class ProfileContainer extends React.Component {
  contactLinks = () => {
    const { profile } = this.props;
    return (
      <div className={s.contactIconsDiv}>
        <a href={profile.contacts.facebook}><img className={s.contactIcon} src={facebook} /></a>
        <a href={profile.contacts.vk}><img className={s.contactIcon} src={vk} /></a>
        <a href={profile.contacts.twitter}><img className={s.contactIcon} src={twitter} /></a>
        <a href={profile.contacts.instagram}><img className={s.contactIcon} src={instagram} /></a>
        <a href={profile.contacts.youtube}><img className={s.contactIcon} src={youtube} /></a>
        <a href={profile.contacts.github}><img className={s.contactIcon} src={github} /></a>
      </div>
    )
  }
  refreshProfile = () => {
    const { match, authorizedUserId, history, getUserProfile, getStatus } = this.props;
    let userId = match.params.userID;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        history.push(
          "/login"
        )
      }
    }
    getUserProfile(userId);
    getStatus(userId);

  }
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps) {
    if(this.props.match.params.userID != prevProps.match.params.userID){
    this.refreshProfile()}
  }

  render() {

    const { isAuth, updateStatus, status, profile, savePhoto} = this.props;
    return (
      <div>
        <Profile {...this.props}
        isOwner={!this.props.match.params.userID }
          profile={profile}
          contactLinks={this.contactLinks} isAuth={isAuth}
          status={status} updateStatus={updateStatus}
          savePhoto={savePhoto} />
          
      </div>
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userID,
  isAuth: state.auth.isAuth

})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus,savePhoto }),
  withRouter,
)(ProfileContainer)



