import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Type from './Type'

export default function Right() {
  return (
    <>
      <div className=" w-[75%]  bg-slate-950 text-white">
        <Chatuser />
        <div  style={{minHeight: "calc(92vh - 8vh)"}}>
          <Messages />
        </div>
        <Type></Type>
      </div>
    </>
  )
}
