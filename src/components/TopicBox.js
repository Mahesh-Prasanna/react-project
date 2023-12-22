import React from 'react'
import './TopicBox.css'

export default function TopicBox() {
    const topic = "My favourite food is Rice"
    const item = " and Kottu "
    const a = 10;
    const b = 20;
    const c = a + b;
  return (
    <div>
        <h1>This is my Topic Box</h1>
        <div className='topicBox'>
            <h2 className='text'>{topic}{item}{c}</h2> <br />
            <h2 className='text'>{[10, 20,39]}</h2>
        </div>
    </div>

  )
}
