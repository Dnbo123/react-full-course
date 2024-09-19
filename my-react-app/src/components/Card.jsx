import React from 'react'
import profilePic from '../assets/profile.jpg'

function Card() {
    return(
        <div className="card">
    <img className="card-image" src={profilePic} alt="Profile picture"></img>
    <h2 className="card-title">Don Bosco</h2>
    <p className="card-text">A Successfull Business Mogul and innovative Entrepreneur</p>
        </div>
    )
}

export default Card;