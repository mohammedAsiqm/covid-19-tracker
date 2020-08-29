import React from 'react';
import GlobalData from './components/globalData'
import StateData from './components/Statecases'
import {BrowserRouter,Route} from 'react-router-dom'
import Homepage from './components/homapage'


function App() {
  return (
    <div className="App" style={{backgroundColor:"#262626"}}>
        <div>
          
            <BrowserRouter>
            <Route  exact  path='/' component={Homepage}/>
            <Route  path='/globaldata' component={GlobalData}/>
            <Route  path='/statedata' component={StateData}/>
            </BrowserRouter>
      
        </div>
    </div>
  );
}

export default App;
