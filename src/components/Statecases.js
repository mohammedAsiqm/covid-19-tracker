import React, { Component } from 'react';
import axios from 'axios'
import URL from './apikey'
import Countup from 'react-countup'
import './css/global&state.css'
import Homebutton from './homebutton'
import './css/select.css'


class StateData extends Component {

            state = {
                Country :"-",
                CountryName : [],
                Confirmed : 0,
                Death : 0,
                Recovered : 0,
                LastUpdate : ""
            }

    
     async componentDidMount(){

        await axios.get(URL+"/countries").then(res => {
            for(let i=0;i<188;i++)
            {
                this.setState({
                    CountryName :  this.state.CountryName.concat(res.data.countries[i].name)   
                })
            }
        }).catch(err => {
            console.log('error in daily');
        })


            // default city

        await axios.get(`${URL}/countries/Afghanistan`).then(res => {

            this.setState({
                Confirmed : res.data.confirmed.value,
                Death : res.data.deaths.value,
                Recovered : res.data.recovered.value,
                LastUpdate : res.data.lastUpdate,
                Country : "Afghanistan"
            })
        })
    }


    Selecthandler = async (e)=> {
    
        this.setState({
            Country : e.target.value
        })

        let url = `${URL}/countries/${e.target.value}`;

        await axios.get(url).then(res => {
    
            this.setState({
                Confirmed : res.data.confirmed.value,
                Death : res.data.deaths.value,
                Recovered : res.data.recovered.value,
                LastUpdate : res.data.lastUpdate
            })        
        }).catch(err => {
            console.log('error in fetching country detail');  
        })
    
    }


    render() {
        return (
            <div>         
                <div className="image" >
            </div>


            <h1 className="h1">Total Cases in {this.state.Country}</h1>
            <select onChange={ this.Selecthandler} className="select">
                
                 {
                this.state.Country === "-" ? 
                <option key="load">LOADING...</option> 
                : 
                 this.state.CountryName.map( (data, i) => {
                return <option className="option" key={i} value={data}>{data}</option>
                    
                })
            }
            </select>
            <div className="container">
                   

             <div className="card bordergreen">
                <h3 className="green">Confirmed Cases  </h3>
                <h1 className='green'>{<Countup start={0} end={this.state.Confirmed} duration={2} separator=","/>}</h1>
                <h3 className="gray">Last Update : {new Date(this.state.LastUpdate).toDateString() }</h3>
                <h5>stay safe, stay at home </h5>
            </div>


            <div className="card borderred">
                <h3 className="red">Death Cases </h3>
                <h1 className="red">{<Countup start={0} end={this.state.Death} duration={2} separator=","/>} </h1>
                <h3 className='gray'>Last Update : {new Date(this.state.LastUpdate).toDateString() }</h3>
                <h5>stay safe, stay at home </h5>
            </div>


            <div className="card borderblue">
                <h3 className="blue">Recovered Cases</h3>  
                <h1 className="blue">{<Countup start={0} end={this.state.Recovered} duration={2} separator=","/>} </h1>
                <h3 className="gray">Last Update : {new Date(this.state.LastUpdate).toDateString() }</h3>
                <h5>stay safe, stay at home </h5>
            </div>


            </div>
                {<Homebutton/>}       
            </div>
        );
    }
}

export default StateData;