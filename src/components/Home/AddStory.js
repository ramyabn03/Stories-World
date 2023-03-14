import React, { useRef } from 'react';

import classes from './AddStory.module.css';
import swal from 'sweetalert';

function AddStory(props) {
  const nameRef = useRef('');
  const openingTextRef = useRef('');
  const titleRef = useRef('');
  const dateRef = useRef('');
  const outlineRef = useRef('');
  const moralRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    const story = {
      name: nameRef.current.value,
      title: titleRef.current.value,
      date: dateRef.current.value,
      outline: outlineRef.current.value,
      openingText: openingTextRef.current.value,
      moral: moralRef.current.value,
    };

    props.onAddStory(story);
    event.target.reset();
    swal("Congratulations", "Your Story Added :)", "success");
  }
  

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Writter Name</label>
        <input type='text' id='name' ref={nameRef} required/>
      </div>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} required/>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Date</label>
        <input type='date' id='date' ref={dateRef} required/>
      </div>
      <div className={classes.control}>
        <label htmlFor='outline'>Story-Outline</label>
        <textarea rows='3' id='outline' ref={outlineRef} required></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Description</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef} required></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='moral'>Moral of the Story</label>
        <textarea rows='1' id='moral' ref={moralRef} ></textarea>
      </div>
      <div className={classes.control}>
        <button className={classes.addbtn}>Add Story</button>
      </div>
    </form>
  );
}

export default AddStory;