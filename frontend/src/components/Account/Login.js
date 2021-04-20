import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import BookAProContext from "../Context/BookAProContextProvider";

const Login = () => {
    const userContext = useContext(BookAProContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const validateSignUp = () => {

        let isValidated = true;

        if (email === "") {
            setErrorEmail("! Enter Your Email");
            isValidated = false;
        }else {
            setErrorEmail("")
        }

        if (password === "") {
            setErrorPassword("! Enter Your Password");
            isValidated = false;
        }else {
            setErrorPassword("")
        }

        return isValidated;

    }

    const submitForm = (event) => {
        event.preventDefault();
        if (validateSignUp()){
            fetch('https://whiletrue-bookapro.herokuapp.com:8878/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, password: password, role: 2})
            }).then(function(res) {
                return res.json();
            }).then(function(res){
                if(res.result){
                    res.data[0].token = res.token;
                    localStorage.setItem('token', res.token);
                    userContext.setUser(res.data[0]);
                    window.location.reload();
                }else{
                    setErrorLogin(res.message)
                }
            });

        }
    }

    return (
        <div className="container space-2 space-lg-4">
            <form className="js-validate w-md-75 w-lg-50 mx-md-auto" noValidate="novalidate" onSubmit={submitForm}>
                <div className="mb-5 mb-md-7">
                    <h1 className="h2 mb-0">Welcome back user</h1>
                    <p>Login to manage your account.</p>
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrEmail">Email address</label>
                    <input type="email" className="form-control" name="email" id="signinSrEmail" placeholder="Email address" aria-label="Email address" required="" data-msg="Please enter a valid email address." onChange={(event) => {
                        setEmail(event.target.value);
                    }} />
                    <span style={{ color: "red" }}>{errorEmail}</span>
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrPassword">
                        <span className="d-flex justify-content-between align-items-center">
                            Password
                        </span>
                    </label>
                    <input type="password" className="form-control" name="password" id="signinSrPassword" placeholder="********" aria-label="********" required="" data-msg="Your password is invalid. Please try again." onChange={(event) => {
                        setPassword(event.target.value);
                    }} />
                    <span style={{ color: "red" }}>{errorPassword}</span>
                </div>

                {errorLogin && 
                    <div class="alert alert-soft-danger alert-dismissable" role="alert">
                        {errorLogin}
                    </div>
                }
                        

                <div className="row align-items-center mb-5">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <span className="font-size-1 text-muted">Don't have an account? </span>
                        <Link to="/registration" className="font-size-1 font-weight-bold ml-2" href="#!">Signup</Link>
                    </div>

                    <div className="col-sm-6 text-sm-right">
                        <button type="submit" className="btn btn-primary transition-3d-hover">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;