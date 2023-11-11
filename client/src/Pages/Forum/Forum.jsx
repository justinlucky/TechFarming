import React from 'react'
import { ChatEngineWrapper, ChatEngine } from 'react-chat-engine'
import {notification} from 'antd'

import './Custom.css'

const Forum = () => {

  return (
    <div className=''>
      <ChatEngineWrapper>
        <ChatEngine
          projectID='72dbef21-d794-4131-bf56-ad5b29e75576'
          userName='Justin'
          userSecret='1234567'
          height='100vh'
          onConnect={(creds) => {notification.success({message: 'onConnect'}); console.log(creds)}}
          onFailAuth={(props) => console.log(props)}
          onNewChat={(chat) => { notification.success({message: 'onNewChat'}); console.log(chat)}}
          onEditChat={(chat) => console.log(chat)}
          onDeleteChat={(chat) => console.log(chat)}
          onNewMessage={(chatId, message) => { notification.success({message: 'onNewMessage'}); console.log(chatId, message)}}
          onEditMessage={(chatId, message) => console.log(chatId, message)}
          onDeleteMessage={(chatId, message) => console.log(chatId, message)}
        />
      </ChatEngineWrapper>
    </div>
  )
}

export default Forum
