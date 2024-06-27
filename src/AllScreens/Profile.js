import React from 'react'
import Nav from '../nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import './Profile.css'
const Profile = () => {
    const user = useSelector(selectUser)
    return (
        <div className='Profile'>
            <Nav />
            <div className='Profile_body'>
                <h1>Edit Profile</h1>
                <div className='Profile_info'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="">                    
                    </img>
                    <div className='Profile_details'>
                        <h2>{user.email}</h2>
                        <div className='Profile_plans'>
                            <button
                            onClick={()=> auth.signOut()}
                            className='Profile_signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile