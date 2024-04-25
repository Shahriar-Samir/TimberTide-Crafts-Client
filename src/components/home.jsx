import React, { useContext } from 'react';
import { AuthContext } from '../providers/authProvider';

const Home = () => {
    const {userLoggedin} = useContext(AuthContext)
    console.log(userLoggedin)
    return (
        <div>
            Home
        </div>
    );
};

export default Home;