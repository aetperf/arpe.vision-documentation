import React from 'react';
import Link from '@docusaurus/Link';
import './styles.css';

export default function NavbarTitle() {
  return (
    <Link to="/" className="navbar__brand">
      <div className="navbar__title custom-navbar-title">
        <span className="arpe-violet">Arpe</span>
        <span>.Vision.Documentation</span>
      </div>
    </Link>
  );
}
