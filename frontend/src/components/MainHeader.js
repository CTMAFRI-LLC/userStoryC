import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';


class MainHeader extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
  render(){
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
          <span>{user ? `Welcome ${user.username}` : ''}</span>
          <button onClick={this.props.logout} className="sign__out">
            Sign out
          </button>
          </Fragment>
    );

    const guestLinks = (
      <button class="sign__out">
      <a href="#">Sign in</a>
    </button>
    );

    return (
      <>
        {/* JSX for header component */}
        <div class="header">
          <Link to="/" class="logo">
            LO <br /> GO
          </Link>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </>
    );
}

}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(MainHeader);
