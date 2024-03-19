import React from 'react'
import SignUp from '../components/SignUp/SignUp'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
    return (
        <> <SignUp />
            <ToastContainer />
        </>

    )
}

export default SignUpPage