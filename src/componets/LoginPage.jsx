import React, { useState } from "react";
import CustomInput from "./common componets/CustomInput";
import CustomButton from "./common componets/CustomButton";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (password.length > 6) {
      try {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredentials.user;

        let userDoc = await getDoc(doc(db, "users", user.uid));

        let userData = userDoc.data();

        console.log("userDoc", userDoc.data());

        dispatch(
          setUser({
            name: userData.name,
            email: user.email,
            uid: user.uid,
          })
        );
        navigate("/account-settings");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("password is invalid");
    }
  };
  return (
    <div className="login-page">
      <h1 className = "heading" style={{marginBottom: "2rem"}}>Signin to your PopX account</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sint?
      </p>
      <CustomInput
        labelName="Email address"
        value={email}
        changeFunc={setEmail}
        type="email"
      />
      <CustomInput
        labelName="Password"
        value={password}
        changeFunc={setPassword}
        type="password"
      />

      <CustomButton clickFunc={e=>handleLogin(e)} title={"Login"} primary={true} />
    </div>
  );
}

export default LoginPage;
