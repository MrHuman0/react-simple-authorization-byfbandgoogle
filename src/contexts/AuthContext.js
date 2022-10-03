import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {auth} from '../components/firebase';

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if (user) history('/main');
            if (!user) history('/');
        })
    }, [user, history]);

    const value = {user};

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}