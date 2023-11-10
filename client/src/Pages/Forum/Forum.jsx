import React from 'react'
import { ChatEngine} from 'react-chat-engine'
import './Custom.css'

const Forum = () => {

  return (
    <div>
      <ChatEngine
        projectID='72dbef21-d794-4131-bf56-ad5b29e75576'
        userName='Justin'
        userSecret='1234567'
        height='100vh'
      />
    </div>
  )
}

export default Forum
