import React from 'react';
import {useHistory} from 'react-router-dom'
import './css/homebutton.css'


function Homebutton() {
  
    const history = useHistory();
    const Clickhandler = ()=> {
        history.push('/')       
    }


    return(
       <div>
          <button onClick={Clickhandler} className="home" >Go to Homepage</button>
       </div>
   )
}

export default Homebutton;