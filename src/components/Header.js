import React from 'react';
import { Link } from 'react-router-dom';


const mainMenuItems = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'Settings', path: '/settings' },
  { id: 3, label: 'Requests', path: '/requests' },
];


const Header = props => (
  <header id="header" role="banner">
    <div className="container">
      <p id="branding">
        <abbr title="Single Page Application Accessibility">SPA11y</abbr>
      </p>
      {mainMenuItems.length > 0 &&
        <nav>
          <ul>
            {mainMenuItems.map(item => (
              <li key={item.id}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      }
    </div>
  </header>
);


export default Header;