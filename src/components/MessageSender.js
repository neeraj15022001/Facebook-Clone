import React,{useState} from 'react';
import "./css/MessageSender.css";
import {Avatar} from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from "./StateProvider";
import db from "../firebase";
import firebase from "firebase";

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        // some clever db stuff
        db.collection("posts").add({
            message: input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : user.photoURL,
            username : user.displayName,
            image : imageURL
        })

        setInput("");
        setImageURL("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input className="messageSender__input" type="text" placeholder={`What's on your mind, ${user.displayName} ?`} value={input} onChange={(e) => {setInput(e.target.value)}} />
                    <input type="text" placeholder="Image URL(Optional)" value={imageURL} onChange={(e) => {setImageURL(e.target.value)}} />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Button
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"yellow"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
