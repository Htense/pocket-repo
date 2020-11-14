import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className= 'container'>

    <div className= 'browser' >

      <Link to = '/'><button className='text-btn'><h3>1. Clone you repo</h3><p>click here</p></button></Link>
      <button className='text-btn'><h3>4. Merge?</h3><p>u sure? have you done step 3?</p></button>
      <button className='text-btn'><h3>4. again Merge for sure</h3><p>click here</p></button>
      </div>

    <div className= 'laptop'>

      <button className='text-btn'><h3>2. Make a Branch</h3><p>click here</p></button>
      <button className='text-btn'><h3>3. Push your branch</h3><p>click here</p></button>
      </div>
     </div>
  )
}


export default Home
