import React from 'react'
import TopicBox from '../components/TopicBox'
import './Home.css'

export default function Home() {
  return (
    <div>
        <h1>This is my Home page</h1>
        <TopicBox food='Kottu' price='20'>
            <span>This is the description</span>
        </TopicBox>
        <TopicBox food='Rice' price='30'>
            <button>This is a Button</button>
        </TopicBox>
        <TopicBox food='String Hopperts' price='50'>
            <p>This is a paragraph</p>
        </TopicBox>
        <div className='flex'>
            <h2>First</h2>
            <h2>Second</h2>
            <h2>Third</h2>
        </div>
        
    </div>
    
  )
}
