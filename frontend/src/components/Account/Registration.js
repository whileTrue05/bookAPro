import { Link } from 'react-router-dom';
import { useState } from 'react'

export const validateEmail = (str = "") => str.includes(".");

const Registration = () => {

    const [input, setInput] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorName, setErrorName] = useState("");

    const validateSignUp = () => {

        let isValidated = true;

        if (name === "") {
            setErrorName("! Please enter your name");
            isValidated = false;
        }


        else {
            setErrorName("")
        }
        if (email === "") {
            setErrorEmail("! Enter Your Email");
            isValidated = false;
        }


        else {
            setErrorEmail("")
        }

        if (password === "") {
            setErrorPassword("! Enter Your Password");
            isValidated = false;
        }


        else {
            setErrorPassword("")
        }


        return isValidated;

    }
    const handleChange = ({ target: { name, value } }) => setEmail((prev) => ({ ...prev }, [name], value))

    return (
        <div className="container space-2 space-lg-4">
            <form className="js-validate w-md-75 w-lg-50 mx-md-auto" noValidate="novalidate" action="/users/add" method="POST">
                <div className="mb-5 mb-md-7">
                    <h1 className="h2 mb-0">Welcome to Front</h1>
                    <p>Fill out the form to get started.</p>
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signupNamme">First name</label>
                    <input type="text" className="form-control" name="fname" id="signupNamme" placeholder="Your first name" aria-label="Your first name" required="" data-msg="Please enter a valid name." />
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signupNamme">Last name</label>
                    <input type="text" className="form-control" name="lname" id="signupNamme" placeholder="Your last name" aria-label="Your last name" required="" data-msg="Please enter a valid name." />
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrEmail">Email address</label>
                    <input type="email" className="form-control" name="email" id="signinSrEmail" placeholder="Email address" aria-label="Email address" required="" data-msg="Please enter a valid email address." />
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrPassword">Password</label>
                    <input type="password" className="form-control" name="password" id="signinSrPassword" placeholder="********" aria-label="********" required="" data-msg="Your password is invalid. Please try again." />
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrConfirmPassword">Confirm password</label>
                    <input type="password" className="form-control" name="confirmPassword" id="signinSrConfirmPassword" placeholder="********" aria-label="********" required="" data-msg="Password does not match the confirm password." />
                </div>

                <div className="js-form-message mb-5">
                    <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                        <input type="checkbox" className="custom-control-input" id="termsCheckbox" name="termsCheckbox" required="" data-msg="Please accept our Terms and Conditions." />
                        <label className="custom-control-label" htmlFor="termsCheckbox">
                            <small>
                                I agree to the
                                <a className="link-underline ml-2" href="#!">Terms and Conditions</a>
                            </small>
                        </label>
                    </div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <span className="font-size-1 text-muted">Already have an account?</span>
                        <a to="/login" className="font-size-1 font-weight-bold ml-2" href="#!">Login</a>
                    </div>

                    <div className="col-sm-6 text-sm-right">
                        <button type="submit" className="btn btn-primary transition-3d-hover">Get Started</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Registration;