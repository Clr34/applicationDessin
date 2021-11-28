import React from 'react';
import Format from './Components/Format';
import Eraser from "./Components/Eraser";

class Pixel extends React.Component{

    constructor(props)
    {
        super(props)
        this.indexCol = this.props.indexCol;
        this.indexRow= this.props.indexRow;
        this.getColor = this.props.getColor;
    }

    changeColor = (event) => {
        //alert("this pixel has been change at " + this.indexRow + "," + this.indexCol + " " + this.getColor);
        event.target.style.backgroundColor = "black";
    }

    render()
    {
        let btn_white = "whiteButton";
        return(
            <button className={btn_white} onClick={this.changeColor} id={this.indexRow+","+this.indexCol} >{this.indexRow+","+this.indexCol}</button>
        )
    }
}

class Board extends React.Component{

    constructor(props)
    {
        super(props)
        window.board = this;
    }

    eraseBoard(nbRow,nbCol){
        alert("Your about to erase the board");

        let row = nbRow;
        let col = nbCol;

        for(let z = 1; z < row; z++)
        {
            for(let w = 1; w < col; w++)
            {
                console.log(z + "," + w);
            }
        }
    }

    buildtable(nbRow,nbCol)
    {
        let table = [];

        for(let i = 1 ; i < nbRow+1; i++)
        {
            table.push(this.buildRow(nbCol, i));
        }
        return <div>{table}</div>
    }

    buildRow(nbCol,nmRow)
    {
        let row = [];
        for(let i = 1 ; i < nbCol+1; i++)
        {
            row.push(<Pixel indexRow = {nmRow} indexCol = {i} getColor = "White"></Pixel>)
        }
        return (
            <div className="board-row">
                {row}
            </div>
        );

    }

    render(){
        return(
            <div>
                {this.buildtable(5,6)}
            </div>
        )
    }
}

export default Board;


  