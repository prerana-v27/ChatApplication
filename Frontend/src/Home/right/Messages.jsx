import React from 'react'
import Message from './Message'

function Messages() {
  return (
    <>
        <div className='py-2  flex flex-col overflow-y-auto scrollbar-hide' style={{maxHeight: "calc(88vh - 12vh)"}}>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            
        </div>
      
    </>
  )
}

export default Messages
