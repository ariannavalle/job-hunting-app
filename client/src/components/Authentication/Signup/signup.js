import React from 'react';
import '../auth.css';
import { Link } from 'react-router-dom'
import { MdPerson, MdEmail, MdLock  } from 'react-icons/md';


import AUTH_SERVICE from '../../../services/AuthService';

export default class Signup extends React.Component {
  state = {
    name: '',
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

    const { name, email, password } = this.state;

    AUTH_SERVICE.signup({ name, email, password })
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
        <section className="signup">
          <div className="container">
            <div onSubmit={this.handleFormSubmission} className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form onSubmit={this.handleFormSubmission} className="register-form" id="register-form">

                  {/* name */}
                  <div className="form-group">
                    <label for="name" className="icon"><MdPerson /></label>
                    <input type="text" name="name" id="name" placeholder="Your Name" value={this.state.name}
                      onChange={this.handleInputChange} />
                  </div>

                  {/* email */}
                  <div className="form-group">
                    <label for="email" className="icon"><MdEmail /></label>
                    <input type="email" name="email" id="email" placeholder="Your Email" value={this.state.email}
                      onChange={this.handleInputChange} />
                  </div>

                  {/* password */}
                  <div className="form-group">
                    <label for="pass" className="icon"><MdLock /></label>
                    <input type="password" name="password" id="pass" placeholder="Password" value={this.state.password}
                      onChange={this.handleInputChange} />
                  </div>

                  {/* submit btn */}
                  <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                  </div>


                  {/* single error message */}
                  {this.state.message && <div style={{ color: "red", paddingTop: "1rem"}}> {this.state.message} </div>}

                  {/* error message array*/}
                  {this.state.message>1 &&
                    <div style={{ color: "red", textAlign: "left" }}>
                      {this.state.message.map(msg => {
                        return (<div>{msg}</div>)
                      })}
                    </div>}


                </form>
              </div>
              <div className="signup-image">
                <figure><img src="images/signin-image.jpg" alt="sign up image" /></figure>
                <Link to='/login' className="signup-image-link">I am already member</Link>
              </div>
            </div>
          </div>


        </section>

      </div>
    );
  }
}
