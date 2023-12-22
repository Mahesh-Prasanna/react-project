import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function About() {
  return (
    <div id='showCol'>
        <h1>This is an About page</h1>
        <Link to={"/"}>Go to Home Page</Link>
        <Link to={"/Contact"}>Go to Contact Page</Link>
    </div>
  )
}
