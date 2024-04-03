import {useAuthState} from "react-firebase-hooks/auth"

import { Navigate, Outlet } from "react-router-dom"
import { auth } from "./firebase";

function PrivateRouter() {
    const [user, loading, error] = useAuthState(auth);
    
    if(loading){
        return <h1>Loading....</h1>
    } else if(!user || error){
        return <Navigate to="/" replace/>
    }else{
        return <Outlet/>;
    }
}

export default PrivateRouter