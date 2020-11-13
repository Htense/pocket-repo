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
      <h2>Nav</h2>
      {rankNames.map(rank => {
      return <button> <Link to = {'/list/' + rank}>{rank}</Link> </button>
          }
        )
      }
      </div>
      )
    }



export default Nav
