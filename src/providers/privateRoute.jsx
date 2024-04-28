import React, { useContext } from 'react';
import { AuthContext } from './authProvider';
import Loader from '../components/loader';
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {loader,userLoggedin} = useContext(AuthContext)
    
    if(userLoggedin){
        return children
    }
    
    if(loader){
        return <Loader/>
    }
    
    return <Navigate to='/'></Navigate>
};

export default PrivateRoute;