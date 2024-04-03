import React from 'react'
import CustomButton from './common componets/CustomButton'
import { useNavigate } from 'react-router-dom'
function Welcome() {
    const navigate = useNavigate();

    const handleSignupPage = ()=>{
        navigate("/signup")
    }

    const handleLoginPage = ()=>{
        navigate("/login")
    }
  return (
    <div className="welcome">
        <h1 className = "heading">Welcome to PopX</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, tempore!</p>
        <CustomButton clickFunc={handleSignupPage} title={"Create Account"} primary={true}/>
        <br/>
        <CustomButton clickFunc={handleLoginPage} title={"Already Registered? Login"} primary={false}/>

    </div>
  )
}

export default Welcome