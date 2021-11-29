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

    changeColor(){
        //alert("this pixel has been change at " + this.indexRow + "," + this.indexCol + " " + this.getColor);

        this.props.onPixelClick(this.indexRow,this.indexCol);
    }

    render()
    {
        let btn_class  = this.props.color !== 'white' ? "blackButton" : "whiteButton";
        return(
            // creéation d'une case pixel
            <button className={btn_class} onClick={this.changeColor.bind(this)} id={this.indexRow+","+this.indexCol} >{this.indexRow+","+this.indexCol}</button>
        )
    }
}

class Board extends React.Component{

    constructor(props)
    {
        super(props)
        window.board = this;
        this.state={
            tableau: Array(this.props.nbRow).fill(Array(this.props.nbCol).fill('white'))
        };
    }

    //effacer tout les pixels
    eraseBoard(){
        this.setState({'clear': 'true'});
        alert("Your about to erase the board");
    }

    //Construire le tableau
    buildtable(nbRow,nbCol)
    {
        let table = [];

        // boucle qui commence à un juste à le nombre de ligne
        for(let i = 1 ; i < nbRow+1; i++)
        {
            // appelle à la méthode qui construie les ligne
            table.push(this.buildRow(nbCol, i));
        }
        return <div>{table}</div>
    }

    // action de cliquage sur un pixel
    onPixelClick(i, j){
        console.log(i)

        // copy
        var newTableau = [...this.state.tableau]

        // modify color of pixel(i,j)
        this.props.color.newTableau[i][j] = 'black';
        //this.componentWillReceiveProps(color: 'black')

        // changement de l'etat tableau du board
        this.setState({tableau: newTableau});

    }

    // Construire la ligne du tableau
    buildRow(nbCol,nmRow)
    {
        let row = [];

        // boucle qui commence à un juste à le nombre de colonne
        for(let i = 1 ; i < nbCol+1; i++)
        {
            // passer à la ligne suivante
            const color = this.state.tableau[nmRow][i]
            row.push(<Pixel onPixelClick = {this.onPixelClick.bind(this)} indexRow = {nmRow} indexCol = {i} color = {color}></Pixel>)
        }
        return (
            // retour à la ligne
            <div className="board-row">
                {row}
            </div>
        );

    }

    render(){
        return(
            <div>
                // Construire le tableau de pixel
                {this.buildtable(this.props.nbRow,this.props.nbCol)}
            </div>
        )
    }
}

export default Board;


  