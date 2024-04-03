import React from 'react'
import CustomButton from './common componets/CustomButton'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../slices/userSlice';
import userimage from './images/defaultuser.jpg'

function AccountSettings() {
    const navigate = useNavigate();
    const activeUser = useSelector((state)=>state.User.user);
    const dispatch = useDispatch();
    const handleLogout = ()=>{
        dispatch(clearUser);
        navigate("/")
    }
  return (
    <div>
        <nav><p>Account settings</p></nav>
        <div>
            <img src={userimage} alt="" />
            <div>
                <h1>{activeUser.name}</h1>
                <p>{activeUser.email}</p>
            </div>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aliquam, optio numquam aut minus voluptates aspernatur asperiores commodi magnam beatae?</p>
        
        <CustomButton clickFunc={handleLogout} title={"Logout"} primary={true}></CustomButton>
    </div>
  )
}

export default AccountSettings