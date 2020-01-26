import React from 'react';
import './EventModal.css'
const EventModal= props =>{
    return(
        <>
            <form onSubmit={props.submit} className="eventForm">
                <h2>Add Event</h2>
                <div className="eventInput">
                    <label for="title">Title</label>
                    <input onChange={props.change} name="title"></input>
                </div>
                <div className="eventInput">
                    <label for="desc">Description</label>
                    <input onChange={props.change} name="desc"></input>
                </div>
                <div className="eventInput">
                    <label for="entry">Entry</label>
                    <input onChange={props.change} name="entry"></input>
                </div>
                <div className="eventInput">
                    <label for="time">Time</label>
                    <input onChange={props.change} name="time"></input>
                </div>
                <div className="eventInput">
                    <label for="date">Date</label>
                    <input onChange={props.change} name="date"></input>
                </div>
                <div className="formButtons">
                    <button type="submit">Submit</button>
                    <button onClick={props.cancel} type="button">Cancel</button>
                </div>
            </form>
        </>
    )
}

export default EventModal;