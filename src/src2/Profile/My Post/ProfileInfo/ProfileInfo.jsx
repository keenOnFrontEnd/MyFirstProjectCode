import React from 'react';
import PreLoader from '../../../../files/photos/PreLoader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './profileStatusWithHooks';
import userPhoto from '../../../../files/photos/user_icon.jpg'
import { connect } from 'react-redux';
import { getFollowingInProgress, getUsers } from '../../../../redux/users-selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUpload } from '@fortawesome/free-solid-svg-icons';


const ProfileInfo = ({ profile, status, contactLinks, updateStatus, dateOfAge, city, education, isOwner, savePhoto, }) => {
  console.log(isOwner)
  if (!profile) {
    return (
      <PreLoader />)
  }
  const onMainPhotoChange = (e) => {
    savePhoto(e.target.files[0])
  }
  let jobFinding = () => {
    if (profile.lookingForAJob === true) {
      return (
        <p className={s.p}>Preference job: {profile.lookingForAJobDescription}</p>
      )
    } else {
      return (
        <p className={s.p}>Has a job</p>
      )
    }
  }
  let changer = (data = '') => { return data; }
  return (
    <div className={s.profileinfo_wrapper}>
      <div className={s.icon_back}>
        <img className={s.icon} src={profile.photos.small || userPhoto} />
        {
        isOwner && 
        <label className={s.custom_upload_file}>
          <input type={"file"} onChange={onMainPhotoChange} />
          <FontAwesomeIcon className={s.icon} icon={faUpload} />
          <div className={s.text}>Change photo</div>
        </label>
        }
      </div>
      <div className={s.descr}>
        <h3 className={s.h1}>{profile.fullName}</h3>
        <div className={s.info}>
          <p className={s.p}> Status: <ProfileStatusWithHooks status={status} updateStatus={updateStatus} /></p>
          <p className={s.p}> Date of Birth: {dateOfAge}</p>
          <p className={s.p}> City: {city}</p>
          {jobFinding()}
          <p className={s.p}> Education: {education}</p>
          <p className={s.p}> Web Site: {contactLinks()}</p>
        </div>
      </div>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    followingInProgress: getFollowingInProgress(state),
    users: getUsers(state),

  }
}

export default connect(mapStateToProps, {})(ProfileInfo);
