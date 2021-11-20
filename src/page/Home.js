import {useEffect, useState} from 'react' 
import { auth } from '../firebase';
import { useHistory, Redirect } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

import { AddPaint } from '../models/models'


const Home = () => {
 
    const history = useHistory();
    const {user, userName} = useAuthContext();
    console.log(user)

    const handleLogout = () => {
        auth.signOut();
        history.push('/login');
    };
    
    AddPaint("hello" ,user.displayName)

    if(!user) {
        return <Redirect to="/login" />
    } else {
        return (
            <>
                <h1>マイページ</h1>
                <div>{userName}さん</div>
                <div>ログイン中：{ user.email }</div>
                <button onClick={handleLogout}>ログアウト</button>
                <hr />                
                
            </>
        );
    };
};

export default Home;