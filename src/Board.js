import React from 'react';
import Format from './Components/Format';
import Eraser from "./Components/Eraser";

class Pixel extends React.Component{

    constructor(props)
    {
        super(props)
        this.indexCol = this.props.indexCol;
        this.indexRow= this.props.indexRow;
    }

    changeColor(){
        //alert("this pixel has been change at " + this.indexRow + "," + this.indexCol + " " + this.getColor);

        this.props.onPixelClick(this.indexRow,this.indexCol);
    }

    render()
    {
        let btn_class  = this.props.color !== 'white' ? "blackButton" : "whiteButton";
        return(
            // création d'une case pixel
            <button className={btn_class} onClick={this.changeColor.bind(this)} id={this.indexRow+","+this.indexCol} >{this.indexRow+","+this.indexCol}</button>
        )
    }
}

class Board extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            tableau: Array(this.props.nbRow).fill().map(() => Array(this.props.nbCol).fill('white')),
            etape: 0
        };
    }

    eraseBoard()
    {
        const newTableau = Array(this.props.nbRow).fill().map(() => Array(this.props.nbCol).fill('white'));
        this.setState({tableau: newTableau});
    }

    ctrlZ()
    {

    }

    // action de cliquage sur un pixel
    onPixelClick(x, y) {
        const newTableau = [...this.state.tableau];
        newTableau[x][y] = 'black';

        let step = this.state.etape;
        step++;

        this.setState({tableau: newTableau, etape: step});
        console.log(this.state.etape)
    }

    //Construire le tableau
    buildtable(nbRow,nbCol)
    {
        let table = [];

        // boucle qui commence à un juste à le nomnew boardbre de ligne
        for(let i = 0 ; i < nbRow; i++)
        {
            let row = [];
            for (let j = 0 ; j < nbCol; j++)
            {
                row.push(<Pixel onPixelClick = {this.onPixelClick.bind(this)} indexRow = {i} indexCol = {j} color ={this.state.tableau[i][j]}></Pixel>)
            }
            table.push(<div class="board-row">{row}</div>);
        }
        return <div>{table}</div>
    }


    render(){
        return(
            <div>
                {this.buildtable(this.props.nbRow,this.props.nbCol)}
                <button onClick={this.eraseBoard.bind(this)}>effacer le board</button>
                <button onClick={this.ctrlZ.bind(this)}>ctrlZ</button>
            </div>

        )
    }
}

export default Board;


  