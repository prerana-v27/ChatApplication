import React from 'react'
import Search from "./Search"
import Users from "./Users"

export default function Left() {
  return (
    <div className="w-[25%] bg-black text-gray-300 border border-gray-800">
      <h1 className='font-bold text-3xl p-2 px-11 '>Chats</h1>
      <Search />
      <hr></hr>
      <Users />
    </div>
  )
}


