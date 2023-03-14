import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
//import TableData from "../pages/TableData";


import "./StoryList.css";

const StoryList = (props) => {
  let navigate = useNavigate();

  function showDetail(id, name, title, date, outline, openingText, moral) {
    localStorage.removeItem("rowItems");
    localStorage.setItem("rowItems",JSON.stringify({
      id,
      name,
      title,
      date,
      outline,
      openingText,
      moral,
    }));
    navigate('/rowDetails');
  
  }
 
  return (
    <Fragment>
    <div>
    <thead>
      <tr>
        <th>Writter Name</th>
        <th>Title</th>
        <th>Story Outline</th>
      </tr></thead>
      <tbody>
        {props.stories.map((story,index) => (
          <tr key={index} onClick={(e) => showDetail(story.id, story.name, story.title, story.date, story.outline, story.openingText, story.moral)}>
            <td>{story.name}</td>
            <td>{story.title}</td>
            <td>{story.outline}</td>
          </tr>
        ))}
      </tbody>
      </div>
    </Fragment>
  );
};

export default StoryList;
