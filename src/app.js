import React, { Component } from 'react';
import Mines from './mSweeperClass.js';
import  './style.css'; 
class App extends Component {
    constructor() {
        super();
        this.state = {
            n: 10
        }
    }
    render() {

        return (
            <div className="container">
                <div className="UpperPart"> 
                  <div className="time">00:22 </div>
                  <div className="emoji"> <i className="fas fa-laugh-beam"></i> </div>
                  
                  <div className="score">0008</div> 

                </div>
                <Mines />

            </div>
        )
    }

}

export default App; 