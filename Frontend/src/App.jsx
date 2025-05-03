import React from 'react'
import Left from './Home/left/Left'
import Right from './Home/right/Right'
import Logout from './Home/left1/Logout'


function App() {
  return (
    <>
      <div className="flex h-screen">
        <Logout />
        <Left />
        <Right />
      </div>
    </>
  )
}

export default App
