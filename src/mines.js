import React, { Component } from 'react';

class Holes extends Component {
    constructor(props) {// handling the clicks on holes as well as updating the button's style accordingly 
        super(props);
        var array = [];
        this.props.mines.map((elements) => elements.forEach((element) => { array.push(element) }));
        this.handleClick = (e) => {
            var data = this.props.neighbours(e);
            var doc = document.getElementById(e.target.id);
            doc.disabled = false;
            if (data.row.clicked == false) {

                doc.style.border = "none";
                if (data.row.mine == false) {
                    doc.value = data.n.toString();
                    doc.style.backgroundColor = "rgb(153, 152, 152)";
                    doc.style.color = "black";
                    doc.style.border = "4px solid rgb(153, 152, 152)";

                } else {
                    doc.style.backgroundColor = "red";
                    doc.value = "X";
                    doc.style.border = "4px solid red";
                    this.props.gameOver();

                }
                data.row.clicked = true;
            }
            doc.disabled = true;

        }
        this.mouseDown = (e) => {
            // let's add the reaction emoji
            var emoji = document.getElementById("reaction");
            emoji.setAttribute('class', "fas fa-tired");
        }
        this.mouseUp = (e) => {
            var emoji = document.getElementById("reaction");
            emoji.setAttribute('class', "fas fa-smile-beam");

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
                                        return (<input type="button" id={element.pointer} key={element.pointer} row={element.row} column={element.column}
                                            onClick={(e) => this.handleClick(e)}
                                            onMouseDown={(e) => this.mouseDown(e)}
                                            onMouseUp={(e) => this.mouseUp(e)} />)
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