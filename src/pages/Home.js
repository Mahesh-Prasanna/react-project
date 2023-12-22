import React from 'react'
import TopicBox from '../components/TopicBox'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div id='showCol'>
        <h1>This is my Home page</h1>
        <Link to={"/About"}>Go to About Page</Link>
        <Link to={"/Contact"}>Go to Contact Page</Link>
        {/* <TopicBox food='Kottu' price='20'>
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
        </div> */}
        
    </div>
    
  )
}
