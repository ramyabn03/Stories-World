import { Fragment } from "react";
import {Link} from 'react-router-dom';
import Card from "../UI/Card/Card";
import AddStory from "../Home/AddStory";
import Button from "../UI/Button/Button";


import classes from '../MainHeader/MainHeader.module.css';

function AddYourStory() {
  async function addStoryHandler(story) {
    const response = await fetch(
      "https://stories-world-54aea-default-rtdb.firebaseio.com/stories.json",
      {
        method: "POST",
        body: JSON.stringify(story),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <Fragment>
    <header className={classes['main-header']}>
          <h1>Story Details</h1>
          <Link to='/home'><Button className="btnView">Story List</Button></Link>
      </header>
      <Card>
        <section>
          <AddStory onAddStory={addStoryHandler} />
        </section>
      </Card>
    </Fragment>
  );
}

export default AddYourStory;
