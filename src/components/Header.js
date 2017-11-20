import React from 'react';
import { Link } from 'react-router-dom';


const Header = props => (
  <header div id="header" role="banner">
    <div className="container">
      <p id="branding">
        <abbr title="Single Page Application Accessibility">SPA11y</abbr>
      </p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);


export default Header;