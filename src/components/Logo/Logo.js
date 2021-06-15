import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo =()=>
{
    return(
<div className='ma4 mt0  mb1'>
 <Tilt className="Tilt br2 shadow-2" options={{ max : 95 }} style={{ height: 200, width: 200 }} >
  <div className="Tilt-inner pa4 "> <img style={{paddingtop:'5px'}}slt='logo' src={brain}/>
  </div>
 </Tilt>

</div>
    );
}






export default Logo;