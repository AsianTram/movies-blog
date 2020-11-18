import { profile } from 'console'
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProfilePending } from '../../../redux/actions/profile'
import { AppState } from '../../../types'
import Spinner from '../../layout/Spinner/index'

const ProfileBtns = () => {
  const dispatch = useDispatch()

  const deleteProfile=()=>{
    const res= window.confirm("Are you sure that you want to DELETE your account. This cannot be undone!")
    dispatch(deleteProfilePending())
  }
  return (
    <div className="profile-btns">
      <Link to ="/edit-profile">Edit Profile</Link>
      <button className="btn btn-danger" onClick={()=> deleteProfile()}>Delete account</button>
    </div>
  )
}

const ProfileInfo = () => {
  const profileState = useSelector((state: AppState) => state.profile)
  
  return (
    <Fragment>
      {profileState.pending ? <Spinner /> : (
        <div className="profile">
          <ProfileBtns />
          <div className="profile-info">
      <h4>Full name: <span>{profileState.profile?.name}</span></h4>
            <h4>Bio: <span>{profileState.profile?.bio}</span></h4>
            <h4>Social Media: </h4>
            <div className="profile-info__socialmedia">
              <h5>facebook: <span>{profileState.profile?.socialmedia?.facebook}</span></h5>
              <h5>instagram: <span>{profileState.profile?.socialmedia?.instagram}</span></h5>
              <h5>linkedin: <span>{profileState.profile?.socialmedia?.linkedin}</span></h5>
              <h5>youtube: <span>{profileState.profile?.socialmedia?.youtube}</span></h5>
              <h5>website: <span>{profileState.profile?.socialmedia?.website}</span></h5>
            </div>

          </div>
        </div>
      )}
    </Fragment>


  )
}

export default ProfileInfo
