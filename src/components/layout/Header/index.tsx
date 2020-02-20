import React from 'react';

import FacebookLogo from '../../../assets/img/facebook-logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={FacebookLogo} alt="Facebook Logo" />
      </div>
    </header>
  );
};

export default Header;
