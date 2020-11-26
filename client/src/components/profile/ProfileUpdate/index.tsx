import React, {useState, useEffect, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import { setAlert } from '../../../redux/actions';
import { updateProfilePending } from '../../../redux/actions/profile';
import { AppState } from '../../../types';
import Spinner from '../../layout/Spinner/index';
import './ProfileUpdate.scss';

const ProfileUpdate = () => {
  const dispatch = useDispatch()
  const profileState = useSelector((state: AppState) => state.profile)
  const [name, setName]=useState('')

  const [bio, setBio]=useState<string | undefined>(undefined)
  const [facebook, setFacebook]=useState<string | undefined>(undefined)
  const [instagram, setInstagram]=useState<string | undefined>(undefined)
  const [linkedin, setLinkedin]=useState<string | undefined>(undefined)
  const [website, setWebsite]=useState<string | undefined>(undefined)
  const [youtube, setYoutube]=useState<string | undefined>(undefined)

  useEffect(() => {
    if(profileState.profile){
      setName(profileState.profile?.name)
      setBio(profileState.profile?.bio)
      setFacebook(profileState.profile?.socialmedia?.facebook)
      setInstagram(profileState.profile?.socialmedia?.instagram)
      setLinkedin(profileState.profile?.socialmedia?.linkedin)
      setWebsite(profileState.profile?.socialmedia?.website)
      setYoutube(profileState.profile?.socialmedia?.youtube)
    }
  }, [profileState])

  const submitHandler=()=>{
    if(!name || name===''){
      dispatch(setAlert({
        statusCode: 400,
        message:'Name cannot be empty',
        alertType:'danger'
      }))
    }
    else{
      dispatch(updateProfilePending({name, bio, socialmedia: {facebook, instagram, linkedin, website, youtube}}))
    }
  }

  return (
    <Fragment>
      {profileState.pending ? (<Spinner/>) : (
        <Fragment>
          {profileState.error ? null : (
            <div className="profile-update">
            <h3>Update User Profile</h3>
             <form>
             <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea className="form-control" id="bio" value={bio} onChange={(e)=> setBio(e.target.value)}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="facebook">Facebook</label>
                <input type="text" className="form-control" id="facebook" value={facebook} onChange={(e)=> setFacebook(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="instagram">Instagram</label>
                <input type="text" className="form-control" id="instagram" value={instagram} onChange={(e)=> setInstagram(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="linkedin">Linkedin</label>
                <input type="text" className="form-control" id="linkedin" value={linkedin} onChange={(e)=> setLinkedin(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input type="text" className="form-control" id="website" value={website} onChange={(e)=> setWebsite(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="youtube">Youtube</label>
                <input type="text" className="form-control" id="youtube" value={youtube} onChange={(e)=> setYoutube(e.target.value)}/>
              </div>
              <button type="button" onClick={()=> submitHandler()} className="btn btn-primary">Save</button>
              <button type="button" className="btn btn-primary"><Link to="/profile" style={{color: 'white'}}>Cancel</Link></button>
      
            </form>
          </div>
          )}
        </Fragment>
        
      )}
    </Fragment>
    
  )
}

export default ProfileUpdate
