import React, { useState, useEffect, useCallback } from "react";

import MainHeader from "../MainHeader/MainHeader";
import StoryList from "./StoryList";
import "./Home.css";
import Card from "../UI/Card/Card";
import LoadingSpinner from "../UI/Button/LoadingSpinner";

function Home() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStoriesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://stories-world-54aea-default-rtdb.firebaseio.com/stories.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedStories = [];

      for (const key in data) {
        loadedStories.push({
          id: key,
          name: data[key].name,
          title: data[key].title,
          date: data[key].date,
          outline: data[key].outline,
          openingText: data[key].openingText,
          moral: data[key].moral,
        });
      }

      setStories(loadedStories);
      console.log(loadedStories);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchStoriesHandler();
  }, [fetchStoriesHandler]);

  let content = <p>Found no Details.</p>;

  if (stories.length > 0) {
    content = <StoryList stories={stories} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <React.Fragment>
      <MainHeader />

      <Card>
        <section className="content">{content}</section>
        <section>
          <button onClick={fetchStoriesHandler}>GET STORIES</button>
        </section>
      </Card>
    </React.Fragment>
  );
}

export default Home;

// import React from 'react';

// import Card from '../UI/Card/Card';
// // import Button from '../UI/Button/Button';
// import classes from './Home.module.css';
// //import AuthContext from '../../store/auth-context';
// import TableData from './TableData';

// const Home = (props) => {

//   return (
//     <Card className={classes.home}>
//       <TableData />
//     </Card>
//   );
// };

// export default Home;
