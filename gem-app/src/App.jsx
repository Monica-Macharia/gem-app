// import React from 'react';
import './App.css'
import User from "./User"
import Admin from "./Admin"

function App() {
  
//Get request happens here updating the card


  return (
    <div className="container">

        <img className='background-image' src="" alt="background-image" />
        <nav className="navbar">
          <img src="./public/gem.png" alt="logo"/>
          <h2>Gems</h2>
          <img src="./public/user.png" alt="user-logo"/>
        </nav>
        <div className="description">
          <p>You Know of Another <br/> Hidden Gem?</p>
          <button className="call-action">Share With Us!</button>
        </div>
        <div className="cards">
          <img src="" alt="card-img"/>
          <h3>Name</h3>

          {/* when learn more is clicked, the card should enlarge or flipped and description offered */}
          <button>Learn More</button>
        </div>

        {/* temporary holding area for admin and user dashbords */}
      <Admin />
      <User /> 
    </div>
   
  )
}

export default App
