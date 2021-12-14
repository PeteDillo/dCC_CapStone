import React from 'react';
import Message from './Message/Message';
import SubMessage from './Message/SubMessage/SubMessage';

function MessageScroll(props){
    return ( 
        <>
        <Message user='Phillip G. Browning' editable={false} message = 'Forget the soup this App is Amazing' likes ={1500}/>
        <Message user='Michael' editable={false} message = 'That Phillip guy knows what it is all about' likes ={75}/>
        <Message user='Robert' editable={false} message = 'Mid Meal' likes ={1}/>
        <div className='bottomBar'>
        <div className = 'loader'/>
        </div>
        </>
     );
}   
 
export default MessageScroll;