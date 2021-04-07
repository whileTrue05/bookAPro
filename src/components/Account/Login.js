import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container space-top-1 space-top-md-2 space-bottom-2 space-bottom-lg-3">
            <form className="js-validate w-md-75 w-lg-50 mx-md-auto" noValidate="novalidate">
                <div className="mb-5 mb-md-7">
                    <h1 className="h2 mb-0">Welcome back</h1>
                    <p>Login to manage your account.</p>
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrEmail">Email address</label>
                    <input type="email" className="form-control" name="email" id="signinSrEmail" placeholder="Email address" aria-label="Email address" required="" data-msg="Please enter a valid email address." />
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrPassword">
                        <span className="d-flex justify-content-between align-items-center">
                            Password
                            <a className="link-underline text-capitalize font-weight-normal" href="#!">Forgot Password?</a>
                        </span>
                    </label>
                    <input type="password" className="form-control" name="password" id="signinSrPassword" placeholder="********" aria-label="********" required="" data-msg="Your password is invalid. Please try again." />
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <span className="font-size-1 text-muted">Don't have an account? </span>
                        <Link to="/registration" className="font-size-1 font-weight-bold ml-2" href="#!">Signup</Link>
                    </div>

                    <div className="col-sm-6 text-sm-right">
                        <button type="submit" className="btn btn-primary transition-3d-hover">Get Started</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;