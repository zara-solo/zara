import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={sidebarVisible ? faTimes : faBars}
        style={{ marginLeft: '70px', width: '30px', height: '20px', cursor: 'pointer' }}
        // alt={sidebarVisible ? 'Close Sidebar' : 'Open Sidebar'}
        onClick={toggleSidebar}
      />

      {sidebarVisible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '200px',
            backgroundColor: 'white',
          }}
        >
          <ul className="nav flex-column">
            <li className="nav-item">
              <Nav.Link href="/collection" style={{ color: 'black', fontFamily: 'Sans-serif', fontSize: '15px', marginLeft: '50px' }}>
                Collection
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/women" style={{ color: 'black', fontFamily: 'Sans-serif', fontSize: '15px', marginLeft: '50px' }}>
                Women
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/men" style={{ color: 'black', fontFamily: 'Sans-serif', fontSize: '15px', marginLeft: '50px' }}>
                Men
              </Nav.Link>
            </li>
      
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
