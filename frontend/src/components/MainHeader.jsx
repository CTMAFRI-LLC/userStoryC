import React from 'react';
import {Link} from 'react-router-dom'

export default function MainHeader() {
    return (
      <>
        {/* JSX for header component */}
        <div class="header">
          <Link to="/" class="logo">
            LO <br /> GO
          </Link>
          <button class="sign__out">
            <a href="#">Sign Out</a>
          </button>
        </div>
      </>
    );
}
