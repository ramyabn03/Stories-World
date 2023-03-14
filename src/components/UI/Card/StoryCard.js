import React from 'react';

import classes from './StoryCard.module.css';

const StoryCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default StoryCard;