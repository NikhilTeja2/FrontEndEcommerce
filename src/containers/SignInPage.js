import SignIn from "../components/SignIn/SignIn";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function SignInPage() {

    return (<>
        <SignIn />
        <ToastContainer />
    </>);
}

export default SignInPage;