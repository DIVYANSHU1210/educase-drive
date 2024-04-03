import React, {useEffect} from 'react'
import CustomButton from './common componets/CustomButton'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../slices/userSlice';
import userimage from './images/defaultuser.jpg'
import { setUser } from '../slices/userSlice';

function AccountSettings() {
    const navigate = useNavigate();
    const activeUser = useSelector((state)=>state.User.user);
    const dispatch = useDispatch();

    useEffect(() => {
        // Retrieve user data from local storage when component mounts
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                const parsedUserData = JSON.parse(userData);
                dispatch(setUser(parsedUserData));
            } catch (error) {
                console.error('Error parsing user data:', error);
                // Handle error, maybe clear local storage in case of invalid data
            }
        }
        else{
            navigate("/");
        }
    }, [dispatch]);


    const handleLogout = ()=>{
        localStorage.clear();
        dispatch(clearUser);
        navigate("/")
    }
  return (
    <div className='account-settings'>
        <nav><p>Account settings</p></nav>
        {activeUser && (
                <div>
                    <img src={userimage} alt='' />
                    <div>
                        <h1>{activeUser.name}</h1>
                        <p>{activeUser.email}</p>
                    </div>
                </div>
            )}
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aliquam, optio numquam aut minus voluptates aspernatur asperiores commodi magnam beatae?</p>
        
        <CustomButton clickFunc={handleLogout} title={"Logout"} primary={true}></CustomButton>
    </div>
  )
}

export default AccountSettings