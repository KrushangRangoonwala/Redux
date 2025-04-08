import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Login from './Pages/Login';

const AuthorityGaurd = ({ children }) => {
    const user = useSelector(state => state.auth);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (user.username === '') {
    //         navigate('/login')
    //     }
    // }, [])

    return (
        <>
            {(user.username === '') ? <Login /> : children}
        </>
    )
}

export default AuthorityGaurd
