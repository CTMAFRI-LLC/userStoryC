
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
          <h2 class="heading__2a">Subscription</h2>
          <h3 class="heading__3a">Step 1 of 3</h3>
          <h4 class="big__show">
            <div class="horizontal">$9.99 </div>
            <div class="vertical">
              <div>per</div>
              <div>month</div>
            </div>
          </h4>
          <div class="main__info">
            <p class="info_1">
              <span>30 days access to the platform</span>
            </p>
            <p class="info_2">
              <span>Access to all tourist sites</span>
            </p>
            <p class="info_3">
              <span>Money back guarantee</span>
            </p>
          </div>
          {/* Making the Continue btn a link to the next page */}
          <Link class="btn__large" to="/step2">
            Continue
          </Link>
        </div>
      </div>
  );
}
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(mapStateToProps, { login })(Login)