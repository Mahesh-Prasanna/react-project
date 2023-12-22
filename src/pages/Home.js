import React from 'react'
import TopicBox from '../components/TopicBox'
import './Home.css'

export default function Home() {
  return (
    <div>
        <h1>This is my Home page</h1>
        <TopicBox></TopicBox>
        <div className='flex'>
            <h2>First</h2>
            <h2>Second</h2>
            <h2>Third</h2>
        </div>
        
    </div>
    
  )
}
