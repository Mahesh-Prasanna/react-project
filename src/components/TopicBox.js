import React from 'react'
import './TopicBox.css'

export default function TopicBox(props) {
    // const topic = "My favourite food is Rice"
    // const item = " and Kottu "
    // const a = 10;
    // const b = 20;
    // const c = a + b;
  return (
    <div>
        <div className='topicBox'>
            <h2 className='text'>My favorite food is {props.food} and price is Rs.{props.price}</h2>
            {props.children}
        </div>
    </div>

  )
}
