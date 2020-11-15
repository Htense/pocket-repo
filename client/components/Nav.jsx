import React from 'react'
import { Link } from 'react-router-dom'
import navNames from '../../data/navigation'

// const Nav = props => {
//   return (
//     <div>
      
//       <button className='nav-text'>{props.text}</button>
//       <button className='nav-text'>{props.text}</button>
//       <img className='home-pic' src={props.image}/>
//     </div>
//   )
// }


const Nav = () => {
  const rankNames = Object.keys(navNames)
  return (
    <div className='nav-box'>
      {rankNames.map(rank => {
      return <Link to = {'/' + rank}><button className='nav-btn'>{rank}</button></Link>
          }
        )
      }
      </div>
      )
    }



export default Nav
