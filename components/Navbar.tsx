import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PROFILE_NAME, SITE_CONFIG } from '../constants';

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/research', label: 'Research' },
  { to: '/teaching', label: 'Teaching' },
  { to: '/photography', label: 'Photography' },
];

const Navbar: React.FC = () => (
  <aside className="site-sidebar" aria-label="Name and navigation">
    <Link
      to="/"
      className="sidebar-name"
      aria-label={`${SITE_CONFIG.name} — Home`}
    >
      <span>{PROFILE_NAME.given}</span>
      <span>{PROFILE_NAME.family}</span>
      <span className="sidebar-nickname">({PROFILE_NAME.preferred})</span>
    </Link>

    <nav className="sidebar-navigation" aria-label="Main navigation">
      {navigation.map(({ to, label }) => (
        <NavLink key={to} to={to} end={to === '/'}>
          {label}
        </NavLink>
      ))}
    </nav>

    <p className="sidebar-affiliation">
      Economics<br />
      {SITE_CONFIG.institution}
    </p>
  </aside>
);

export default Navbar;
