import React from 'react';
import "./css/StoryReel.css";
import Story from "./Story";

function StoryReel() {
    const imageURL = "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80";
    const profileURL = "https://avatars2.githubusercontent.com/u/55191873?v=4"
    return (
        <div>
            <div className="storyReel">
                <Story image={imageURL} profileSrc={profileURL} title="Neeraj" />
                <Story image={imageURL} profileSrc={profileURL} title="Neeraj" />
                <Story image={imageURL} profileSrc={profileURL} title="Neeraj" />
                <Story image={imageURL} profileSrc={profileURL} title="Neeraj" />
                <Story image={imageURL} profileSrc={profileURL} title="Neeraj" />
                <Story image={imageURL} profileSrc={profileURL} title="Neeraj" />
                <Story image={imageURL} profileSrc={profileURL} title="Neeraj" />
            </div>
        </div>
    )
}

export default StoryReel
