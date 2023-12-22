import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Contact() {
  return (
    <div id='showCol'>
        <h1>This is Contact page</h1>
        <Link to={"/"}>Go to Home Page</Link>
        <Link to={"/About"}>Go to About Page</Link>
    </div>
  )
}
