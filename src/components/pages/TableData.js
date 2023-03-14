import React, { Fragment, useEffect, useState } from "react";
import "./TableData.css";
import classes from '../MainHeader/MainHeader.module.css';
import { Link } from "react-router-dom";
import StoryCard from "../UI/Card/StoryCard";
import Button from "../UI/Button/Button";


function TableData(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("rowItems"));
    if (items) {
      setItems(items);
      console.log(items);
    }
  }, []);

  return (
    <Fragment>
      <header className={classes['main-header']}>
          <h1>Story Details</h1>
          <Link to='/home'><Button className="btnView">Back</Button></Link>
      </header>
      <StoryCard>
      <section className="details-sec">
        <h4>Title</h4>
        <p>{items.title}</p>
        <hr/>
        <h4>Story Outline</h4>
        <p>{items.outline}</p>
        <hr/>
        <h4>Story Description</h4>
        <p>{items.openingText}</p>
        <hr/>
        <h4>Writter Name</h4>
        <p>{items.name}</p>
        <hr/>
        <h4>Date</h4>
        <p>{items.date}</p>
        <hr/>
        <h4>Moral</h4>
        <p>{items.moral}</p>
        <hr/>
      </section>
      </StoryCard>
    
    </Fragment>
  );
}

export default TableData;
