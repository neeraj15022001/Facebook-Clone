import { Avatar } from '@material-ui/core';
import React from 'react';
import "./css/Story.css";
// import {Avatar} from "@material-ui/core";

function Story(props) {
    const {image, profileSrc, title} = props;
    return (
        <div style={{background : `url(${image})`}} className="story">
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
