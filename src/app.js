import React, { Component } from 'react';
import Mines from './mSweeperClass.js';
import './style.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            timer:" "
        }
    }
    componentWillMount(){
        var i=0;
        setInterval(()=> {
            this.setState({
                 timer:"00:"+i.toString()
             });
          
             i++; 
        }, 1000);
    }

    render() {
        return (
            <div className="container">
                <div className="Topinfo">
                
                    <i className="fas fa-bomb"></i>
                    <p className="title">Minesweeper</p>
                    <p className="hide">__</p>
                    <p className="delete">X</p>

                </div>
                <div className="info"> <p> Game </p> <p> Help</p> </div>
                <div className="UpperPart">
                    <div className="subUpperPart">
                        <div className="time">{this.state.timer}</div>
                        <i className="far fa-laugh-beam"></i>
                        <div className="score">0008</div>
                    </div>
                </div>
                <Mines />

            </div>
        )
    }

}

export default App; 