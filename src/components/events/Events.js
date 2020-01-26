import React from 'react';
import './Events.css'
import ReadMore from '../buttons/ReadMore';

const Events= props=>{
    return(
        <div onMouseOver={props.promptEdit}  className={'event id'+props.index}>
            <img className={`edit ${props.editPromp}`} data-index={props.index} data-title={props.eventTitle} data-desc={props.desc} data-entry={props.entry} data-date={props.date} data-time={props.time} onClick={props.show} src={require("../../images/edit.png")} alt='edit button'></img>
            <h3>{props.eventTitle}</h3>
            <img className="promo" src={props.src} alt="event promo"/>
            <p>{props.desc}</p>
            <p><strong>Entry:</strong>{props.entry}</p>
            <p><strong>Date:</strong>{props.date}</p>
            <p><strong>Time:</strong>{props.time}</p>
            <ReadMore name='Read More'/>
        </div>
    )
}

export default Events;