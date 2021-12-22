import React, {useRef, useState} from 'react';
import '../CommentsBox.css';
import axios from 'axios';

function TopCommentsBox (props){

    const message=useRef(null);
    // Trigger the underline animation
    const[showCommentLine, setCommentLine] = useState(false);
    // True on focus. False on CANCEL press
    const[showButtons, setShowButtons] = useState(false);
    // True on input data. False when input is blank.
    const[enableBtn, setEnableBtn] = useState(true);

    // When they click on the Input. Show the underline and the button.
    const commentFocus = () =>{
        setCommentLine(true);
        setShowButtons(true);
    }

    // When they click on the Input. Hide the underline.
    const commentFocusOut = () => {
        setCommentLine(false);
    }

    // If Input value isn't empty then ENABLE the COMMENT BTN.
    const commentStroke = event => {
        let currentMessage = event.target.value;
        if(currentMessage){
            setEnableBtn(false);
        }
        else{
            setEnableBtn(true)
        }
    }
            // AXIOS POST REQUEST HERE GRAB THE JWT AND YEET IT
    const sendComment = (event) => {

        event.preventDefault();
    }







    return ( 
        <form>
            <section className="commentBox">
            <input
                    autoFocus={props.autoFocus}
                    type="text"
                    placeholder="Add a public comment..."
                    ref={message}
                    onFocus={commentFocus}
                    onBlur={commentFocusOut}
                    onKeyUp={commentStroke}
                    />
            {/* Underline Starts here */}
            {showCommentLine && <div className="commentLine"></div>}
            </section>
            {showButtons && (
                <>
                <button className='commentButton sendButton' disabled={enableBtn} onClick={sendComment} >COMMENT</button>
                <button className="commentButton" style={{color: "gray", backgroundColor:"transparent"}} 
                onClick={() =>{
                    setShowButtons(false);
                    message.current.value =""
                }}>CANCEL</button>
                </>
            )}
        </form>
     );
}
 
export default TopCommentsBox;