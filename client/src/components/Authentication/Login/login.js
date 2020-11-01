import React from 'react';
import '../auth.css';
import { Link } from 'react-router-dom'
import { MdEmail, MdLock  } from 'react-icons/md';

import AUTH_SERVICE from '../../../services/AuthService';

export default class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    message: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmission = event => {
    event.preventDefault();

    const { email, password } = this.state;

    AUTH_SERVICE.login({ email, password })
      .then(responseFromServer => {
        const { user } = responseFromServer.data;

        this.props.onUserChange(user);
        this.props.history.push('/');
      })
      .catch(err => {
        if (err.response && err.response.data) {
          return this.setState({ message: err.response.data.message });
        }
      });
  };

  render() {
    return (
      <div className="landing-body">
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <figure><img src="/images/signup-image.jpg" alt="sign up image" /></figure>
                <Link to='/signup' className="signup-image-link">Create an account</Link>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Sign in</h2>
                <form onSubmit={this.handleFormSubmission} className="register-form" id="login-form">

                  <div className="form-group">
                  <label for="email" className="icon"><MdEmail /></label>
                    <input type="email" name="email" id="email" placeholder="Email" value={this.state.email}
                      onChange={this.handleInputChange} />
                  </div>

                  <div className="form-group">
                  <label for="your_pass" className="icon"><MdLock /></label>
                    <input type="password" name="password" id="your_pass" placeholder="Password" value={this.state.password}
                      onChange={this.handleInputChange} />
                  </div>

                  {/* <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div> */}
                  <div className="form-group form-button">
                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                  </div>
                </form>

                {/* error message */}
                {this.state.message && <div style={{ color: "red", paddingTop: "1rem"}}> {this.state.message} </div>}


                {/* <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
