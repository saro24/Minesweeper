import React, { Component } from 'react';
import Mines from './mSweeperClass.js';
import './style.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            timer: " "
        }
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
              
                <Mines />

            </div>
        )
    }

}

export default App; 