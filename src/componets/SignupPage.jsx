import React, { useState } from 'react';
import CustomInput from './common componets/CustomInput';
import CustomButton from './common componets/CustomButton';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useDispatch } from 'react-redux';
import {setUser} from "../slices/userSlice"

function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company , setCompany] = useState("");
    const [isAgency, setIsAgency] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignup = async(event) => {
        event.preventDefault();
        if (name && email && password) {
            // Perform signup action here
            try{
                const userCredentials = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                const user = userCredentials.user;

                await setDoc(doc(db, "users", user.uid),{
                    name:name,
                    email:user.email,
                    company : company,
                    isAgency : isAgency,
                    uid:user.uid
                })

                dispatch(
                    setUser({
                        name:name,
                        email:user.email,
                        company : company,
                        isAgency : isAgency,
                        uid:user.uid,
                    })
                )
                navigate("/account-settings");
            }catch(err){
                console.log(err);
            }
        }
        else{
            alert("please fill complete form before submitting")
        }
    }

    const handleAgencyChange = (event) => {
        setIsAgency(event.target.value === "Yes");
    }

    return (
        <div>
            <h1>Create your PopX account</h1>
            <CustomInput labelName="Full Name" value={name} changeFunc={setName} type="text" required={true} />
            <CustomInput labelName="Email address" value={email} changeFunc={setEmail} type="email" required={true}/>
            <CustomInput labelName="Password" value={password} changeFunc={setPassword} type="password" required={true}/>
            <CustomInput labelName="Company Name" value={company} changeFunc={setCompany} type="text" required={false}/>
            <p>Are you an agency <span>*</span></p>
            <input type="radio" id="yes" name="isAgency" value="Yes" checked={isAgency} onChange={handleAgencyChange} />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="isAgency" value="No" checked={!isAgency} onChange={handleAgencyChange} />
            <label htmlFor="no">No</label><br/>
            
            <CustomButton clickFunc={(e)=>handleSignup(e)} title={"Create Account"} primary={true} />
        </div>
    );
}

export default SignupPage;