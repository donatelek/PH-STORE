import React, { Component } from 'react';
import './GreetingSite.css';
import video from '../HEH.mp4';
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
class GreetingSite extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="greeting">
            {/* <ReactPlayer url={video} playing width={1500} className='reactPlayer'/> */}
            {/* <Player
      src={video}
   
      height={1000}
      fluid='false'
    
      className='reactPlayer'
    /> */}
    <div className="blur"></div>
    <button className='shopNow'>Shop Now!</button>
    <video className='video' autoPlay>
      <source src={video}/>
      
    </video>
            </div>
         );
    }
}
 
export default GreetingSite;