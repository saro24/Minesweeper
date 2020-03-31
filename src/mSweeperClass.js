import React, { Component } from 'react';
import Holes from './mines.js';
class Mines extends Component {
    constructor() {
        super();
        this.state = {
            grid: [],
            n: 10, //refers to the grid size
            mines: 10, // number of mines to be spread around the board
            timer: " ",
            score: 0,
            gameOver: false
        }
        this.startOver= this.startOver.bind(this);
        this.gameOver = this.gameOver.bind(this)
        this.timer = this.timer.bind(this);
        this.getNumberOfNeighboursMines = this.getNumberOfNeighboursMines.bind(this);
        this.update = this.update.bind(this);
        this.MoorNeighbours = (row, column, n) => {
            var cb = column + 1 <= n - 1 ? column + 1 : null; //column bottom
            var ct = column - 1 >= 0 ? column - 1 : null; //column top
            var rl = row + 1 <= n - 1 ? row + 1 : null;//row left
            var rr = row - 1 >= 0 ? row - 1 : null;//row right       
            //mergin rows and columns alow generating the surrounding of each column
            var neighbours = [
                { row: row, column: cb },
                { row: row, column: ct },
                { row: rl, column: column },
                { row: rr, column: column },
                { row: rr, column: ct },
                { row: rl, column: ct },
                { row: rr, column: cb },
                { row: rl, column: cb }]
            return neighbours;
        }
    }
    generategrid(n) {// 
        var grid = [];
        var num = 0;
        for (var row = 0; row < n; row++) {
            var subGrid = [];
            for (var column = 0; column< n; column++) {
                var one = {};
                one.column = column;
                one.row = row;
                one.pointer = num;
                one.clicked = false;
                one.mine = false;
                one.neighbours = this.MoorNeighbours(one.row, one.column, n).filter(element => { return element.row != null && element.column != null })
                subGrid.push(one);
                num++;
            }
            grid.push(subGrid);
        }
        return grid;
    }
    generateMines(grid) {
        for (var i = 0; i < this.state.mines; i++) {
            var randomRow = Math.floor(Math.random() * this.state.n);
            var randomColumn = Math.floor(Math.random() * this.state.n);
            grid[randomRow][randomColumn].mine = true;
        }
        return grid;
    }
    update(n) { // function to update the state initialy 
        var array = this.generateMines(this.generategrid(n));
        this.props = array;

        return array;
    }
    getNumberOfNeighboursMines(event) {// this function  gets the number of
                                      // meighbours containing mines  as well as updating the score
        var n = 0;
        var array = this.state.grid;
        var score = this.state.score;
        var row = event.target.getAttribute('row');
        var column = event.target.getAttribute('column');
        array[row][column].neighbours.forEach(element => {
            if (array[element.row][element.column].mine == true) {
                n++;
            }
        });
        if (array[row][column].mine == false && this.state.gameOver == false) {
            score++;
        }
        this.setState({
            grid: array,
            score: score
        });

        return { n: n, row: array[row][column] };
    }
    timer() { // to count the timing  
        var second = 60;
        var min = 2;
        var time = setInterval(() => {
            if (this.state.gameOver == false) {
                this.setState({
                    timer: "0" + min.toString() + ":" + second.toString()
                });
                if (second <= 1 && min>0) {
                    second = 60;
                    min--;
                }
                if(min==0 && second<1){ // the mins reached their end then game Over !
                    this.gameOver();
                }
                second--;

            } else {
                clearInterval(time);
            }
        }, 1000);

    }
    gameOver() { // settting the final state of the game when it's over 
        var array = this.state.grid;
        array.forEach(elements => elements.forEach(element => element.clicked = true));
        this.setState({
            grid: array,
            gameOver: true
        });
        var emoji = document.getElementById("reaction");
        emoji.setAttribute('class', "fas fa-sad-cry");

    }
     startOver(e){ // starting over through reloading teh window 
        window.location.reload(true);
     }
    componentWillMount() { // setting up the grid initially 
        var array = this.update(this.state.n);
        this.setState({
            grid: array
        });

        this.timer();
    } 
    render() {
        return (
            <div className="mineSweeperContainer">
                <div className="UpperPart">
                    <div className="subUpperPart">
                        <div className="time">{this.state.timer}</div>
                        <i id="reaction" className="fas fa-smile-beam" onClick= {(e) =>this.startOver(e)}></i>
                        <div className="score">{this.state.score}</div>
                    </div>
                </div>
                <Holes mines={this.state.grid} n={this.state.n}
                    neighbours={this.getNumberOfNeighboursMines} gameOver={this.gameOver}>  </Holes>
            </div>
        )
    }
}
export default Mines; 
