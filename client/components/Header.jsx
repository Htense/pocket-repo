import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to = '/'>
        <img className= 'header-pic' src = "/images/header.png"/>
      </Link>
    </div>
  )
}

export default Header
