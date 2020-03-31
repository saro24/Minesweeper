import React, { Component } from 'react';
import Holes from './mines.js';
class Mines extends Component {
    constructor() {
        super();
        this.state = {
            grid: [],
            n: 10, //refers to the grid size
            mines: 10, // number of mines to be spread around the board
            timer:60*2
        }
        this.getNumberOfNeighboursMines= this.getNumberOfNeighboursMines.bind(this);
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

    generategrid(n) {
        var grid = [];
        var num = 0;
        for (var column = 0; column < n; column++) {
            var subGrid = [];
            for (var row = 0; row< n; row++) {
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
    getNumberOfNeighboursMines(event) {
         
        var n = 0;
        var array = this.state.grid;
        var row = event.target.getAttribute('row');
        var column = event.target.getAttribute('column');
         array[row][column].neighbours.forEach(element => {
            if (array[element.row][element.column].mine==true) {
                n++;
            }
         });   
         array[row][column].clicked=true; 
         this.setState({ 
             grid: array 
         }); 
            
        return {n: n, row:array[row][column]};       
    } 

   
    componentWillMount() {
        var array = this.update(this.state.n);
        this.setState({
            grid: array
        })
    }
    render() {
        return (
             
            <Holes mines={this.state.grid} n={this.state.n} neighbours={this.getNumberOfNeighboursMines}>  </Holes>

        )
    }
}
export default Mines; 
