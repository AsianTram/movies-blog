import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteProfilePending } from '../../../redux/actions/profile'
import { AppState } from '../../../types'
import Spinner from '../../layout/Spinner/index'
import './ProfileInfo.scss'

const ProfileBtns = () => {
  const dispatch = useDispatch()

  const deleteProfile=()=>{
    const res= window.confirm("Are you sure that you want to DELETE your account. This cannot be undone!")
    dispatch(deleteProfilePending())
  }
  return (
    <div className="profile-btns">
      <Link to ="/edit-profile">Edit Profile</Link>
      <button className="btn btn-danger" onClick={()=> deleteProfile()}><i className="fas fa-trash"></i></button>
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
            <table>
              <tr>
                <td className="profile-info__title"><h4>Full name: </h4></td>
                <td><p>{profileState.profile?.name}</p></td>
              </tr>
              <tr>
                <td className="profile-info__title"><h4>Bio: </h4></td>
                <td><p>{profileState.profile?.bio ?? 'None'}</p></td>
              </tr>
              <tr>
                <td className="profile-info__title"><h4>Social Media: </h4></td>
                <td></td>
              </tr>
              <tr>
                <td className="profile-info__title"><h5>Facebook: </h5></td>
                <td><p>{profileState.profile?.socialmedia?.facebook ?? 'None'}</p></td>
              </tr>
              <tr>
                <td className="profile-info__title"><h5>Instagram: </h5></td>
                <td><span>{profileState.profile?.socialmedia?.instagram ?? 'None'}</span></td>
              </tr>
              <tr>
                <td className="profile-info__title"><h5>Linkedin: </h5></td>
                <td><p>{profileState.profile?.socialmedia?.linkedin ?? 'None'}</p></td>
              </tr>
              <tr>
                <td className="profile-info__title"><h5>Youtube: </h5></td>
                <td><span>{profileState.profile?.socialmedia?.youtube ?? 'None'}</span></td>
              </tr>
              <tr>
                <td className="profile-info__title"><h5>Website: </h5></td>
                <td><span>{profileState.profile?.socialmedia?.website ?? 'None'}</span></td>
              </tr>
              
            </table>
      {/* <h4>Full name: <span>{profileState.profile?.name}</span></h4>
            <h4>Bio: <span>{profileState.profile?.bio}</span></h4>
            <h4>Social Media: </h4>
            <div className="profile-info__socialmedia">
              <h5>Facebook: <span>{profileState.profile?.socialmedia?.facebook ?? 'None'}</span></h5>
              <h5>Instagram: <span>{profileState.profile?.socialmedia?.instagram ?? 'None'}</span></h5>
              <h5>Linkedin: <span>{profileState.profile?.socialmedia?.linkedin ?? 'None'}</span></h5>
              <h5>Youtube: <span>{profileState.profile?.socialmedia?.youtube ?? 'None'}</span></h5>
              <h5>Website: <span>{profileState.profile?.socialmedia?.website ?? 'None'}</span></h5> */}
            {/* </div> */}

          </div>
        </div>
      )}
    </Fragment>


  )
}

export default ProfileInfo
