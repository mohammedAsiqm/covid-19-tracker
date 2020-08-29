import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import image from './imgs/covidtext.png'
import symbol from './imgs/covidsymbol.png'
import './css/homepage.css' 
import 'bootstrap/dist/css/bootstrap.min.css'


class Homapage extends Component {

        state = {
            global : false,
            state : false
        }


        Globalhandler = ()=> {
            this.setState({
                global: true
            })
        }


        Statehandler = ()=> {
            this.setState({
                state: true
            })
        }

   
     render() {
        return (
            <div>
                {
                this.state.global ? (<Redirect to='/globaldata'/>):<Redirect to='/'/>
                }
                {
                this.state.state  ? (<Redirect to='/statedata'/>):<Redirect to='/'/>
                }

                <div className='header'>
                    <img  className = "img image1 img-fluid" src={symbol} alt="viruspng"/>
                    <h1 className = "tracker">Corona Tracker</h1>
                    <img className = "img-fluid image2" src={image} alt="no" />
                    <div className = "section">
                    <button className = "btn1" onClick={this.Globalhandler}>GLOBAL CASES</button>
                    <button className = "btn1" onClick={this.Statehandler}>STATE CASES</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Homapage;