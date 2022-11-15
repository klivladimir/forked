import React = require('react');
import { Fragment } from 'react';
import '../style.scss';
import './home.scss';
import { Link, Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <Fragment>
      <nav>
        <Link to="/cats">Cats</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/bucket">Bucket</Link>
        <Link to="/signin">Sign in</Link>
      </nav>
      <Outlet></Outlet>
    </Fragment>
  );
};
