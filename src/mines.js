import React, { Component } from 'react';

class Holes extends Component {
    constructor(props) {
        super(props);
        var array = [];
        this.props.mines.map((elements) => elements.forEach((element) => { array.push(element) }));
        this.handleClick = (e) => {
            var data = this.props.neighbours(e);
            var doc = document.getElementById(e.target.id);
            doc.disabled = false;
            doc.style.border = "none";
            if (data.row.mine == false) {
                doc.value = data.n.toString();
                doc.style.backgroundColor = "rgb(153, 152, 152)";
                doc.style.color = "black";

            } else {
                //stop the time and the game 
                doc.style.backgroundColor = "red";
                doc.value = "X";


            }
            doc.disabled = true;
        }
    }
    render() {
        var n = this.props.n;
        return (
            <div className="holes" >
                {
                    this.props.mines.map((elements) => {
                        return (
                            <div key={n--}>
                                {
                                    elements.map((element) => {
                                        return (<input id={element.pointer} key={element.pointer} row={element.row} column={element.column}
                                            onClick={(e) => this.handleClick(e)} />)
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Holes; 