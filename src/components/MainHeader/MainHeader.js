import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import Title from './Title';

const MainHeader = (props) => {

  return (
    <header className={classes['main-header']}>
      <Title />
      <Navigation />
    </header>
  );
};

export default MainHeader;
