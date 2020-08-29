import React, { Component } from 'react';
import axios from 'axios'
import URL from './apikey'
import Countup from 'react-countup'
import './css/global&state.css'
import Homebutton from './homebutton'



class Data extends Component {

        state = {
        Confirmed : 0,
        Death : 0,
        Recovered : 0,
        LastUpdate : ""
        }


   async componentDidMount(){

        await axios.get(URL).then(res => {
       
                this.setState({
                    Confirmed : res.data.confirmed.value,
                    Death : res.data.deaths.value,
                    Recovered : res.data.recovered.value,
                    LastUpdate : res.data.lastUpdate
                })
          }).catch(err => {
                console.log('error');
             })
    }


        render() {
            return (
                <div>
                  <div className="image" >
                
                  </div>

             <h1 className="h1">Total Cases (Global)</h1>
           
        <div className="container">
                   
             <div className="card bordergreen">
                <h3 className="green">Confirmed Cases  </h3>
                <h1 className='green'>{<Countup start={0} end={this.state.Confirmed} duration={7} separator=","/>}</h1>
                <h3 className="gray">Last Update : {new Date(this.state.LastUpdate).toDateString() }</h3>
                <h5>stay safe, stay at home </h5>
            </div>


             <div className="card borderred">
                <h3 className="red">Death Cases </h3>
                <h1 className="red">{<Countup start={0} end={this.state.Death} duration={7} separator=","/>} </h1>
                <h3 className='gray'>Last Update : {new Date(this.state.LastUpdate).toDateString() }</h3>
                <h5>stay safe, stay at home </h5>
            </div>


            <div className="card borderblue">
                <h3 className="blue">Recovered Cases</h3>  
                <h1 className="blue">{<Countup start={0} end={this.state.Recovered} duration={7} separator=","/>} </h1>
                <h3 className="gray">Last Update : {new Date(this.state.LastUpdate).toDateString() }</h3>
                <h5>stay safe, stay at home </h5>
            </div>
        
            </div>
             {<Homebutton/>}
            </div>
        );
}
}

export default Data;