
import React, { Component } from "react";
import PropTypes from "prop-types"
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../actions/auth';


class Login extends Component{
    state = {
      username: '',
      password: '',
    }
    static propTypes = {
      login: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool,
    }
  
    onSubmit = (e) => {
      e.preventDefault();
      this.props.login(this.state.username, this.state.password);
    }
  
    onChange = (e) => this.setState({ [e.target.name] : e.target.value});
  
    render (){
      if (this.props.isAuthenticated){
        return <Redirect to="/" />;
      }
      const { username, password } = this.state;
      return (
    // JSX of Main container in the mainsection page
      <div class="main__content">
        <div class="container">
          <Link to="#">
            <img
              class="close__icon"
              src="assets/img/SVG/CircleButton.svg"
              alt=""
            />
          </Link>
          <form onSubmit={this.onSubmit}>
            <div>
                <input 
                type="text" 
                class="text-input"
                placeholder="Username"
                name="username"
                onChange={this.onChange} 
                value={username} required
                />
            </div>
            <div>
                <input 
                type="password"
                class="text-input"
                placeholder="Password" 
                name="password"   
                onChange={this.onChange} 
                value={password} 
                required />
            </div>
            <div className="checkbox-container my-2">
                <label className="checkbox-label">
                    <input type="checkbox" />
                    <div className="input-title">Keep me signed in</div>
                    <span className="checkbox-custom rectangular" />
                </label>
            </div>
            <div className="my-2">
                <button type="submit" className="btn sa-form-btn">sign in</button>
            </div>
        </form>
                      <div className="my-2 quest">
                        <span className="sa-dash" />
                        <span>Or sign in with</span>
                        <span className="sa-dash" />
                      </div>
                      <div className="my-2 d-flex justify-content-between">
                        <Link href="#" className="btn sa-df-btn">Google</Link>
                        <Link href="#" className="btn sa-df-btn">Facebook</Link>
                      </div>
                    </div>
        </div>
  );
}
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
export default connect(mapStateToProps, { login })(Login)