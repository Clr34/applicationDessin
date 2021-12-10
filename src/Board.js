import React from 'react';
import useState from 'react-hook-use-state';
import {buildQueries} from "@testing-library/react";

class Pixel extends React.Component{

    constructor(props)
    {
        super(props)
        this.indexCol = this.props.indexCol;
        this.indexRow= this.props.indexRow;
    }

    changeColor()
    {
        this.props.onPixelClick(this.indexRow,this.indexCol);
    }

    render()
    {
        let btn_class = this.props.color === 'white' ? "whiteButton" : "blackButton";

        return <button className={btn_class} onClick={this.changeColor.bind(this)} id={this.indexRow+","+this.indexCol} ></button>
    }
}

// En cours de travail. A teme nous devrions être capable de choisir la couleur de notre pixel à colorier.
function prepareColor()
{
    return(
        <div>
            <input type="color"/>
            <button>color</button>
        </div>
    );
}

class Board extends React.Component{

    constructor(props)
    {
        super(props)
        this.state= {
            tableau: Array(this.props.nbRow * this.props.nbCol).fill('white'),
            history: [],
            step: 0,
            changingcolor: "#ffffff"
        }
    }

    // Permet de passer d'un tableau bidimensionnel à un tableau unidimensionnel
    changeCoordonnees(i,j)
    {
        return ((this.props.nbCol) * i) + j;
    }

    // Efface notre dessin (le rend tout blanc)
    eraseBoard()
    {
        let step = this.state.step;
        step++;

        let histoire = [...this.state.history];
        histoire.push(this.state.tableau);

        const newTableau = Array(this.props.nbRow * this.props.nbCol).fill('white');
        this.setState({tableau: newTableau, step: step, history: histoire});
    }

    // permet de retourner à l'état précédent (undo ou retour)
    ctrlZ()
    {
        let step = this.state.step;
        step--;
        const histoire = [...this.state.history]
        const newTableau = histoire[step]
        this.setState({tableau: newTableau, step: step});
    }

    // dessine lorque l'on appuie sur un pixel
    onPixelClick(x, y) {

        // incrémente l'état step, step nous donne le nombre de fois où l'on a dessiné
        let step = this.state.step;
        step++;

        // rajoute l'état du tableau précédent à notre historique
        let histoire = [...this.state.history];
        histoire.push(this.state.tableau);

        // modification du tableau, celui qui va être affiché
        let newTableau = [...this.state.tableau];
        newTableau[this.changeCoordonnees(x,y)] = 'black';

        this.setState({tableau: newTableau, history: histoire, step: step});
    }

    //Construction du tableau
    buildtable(nbRow,nbCol)
    {
        let table = [];

        // Les boucles permettent de passer sur chaque pixel pour le construire à la taille demandée
        for(let i = 0 ; i < nbRow; i++)
        {
            // il y a autant de tableaux row que de lignes demandées (nbRow) et contiennent autant de pixel que de colonnes demandées (nbCol)
            let row = [];
            for (let j = 0 ; j < nbCol; j++)
            {
                row.push(<Pixel onPixelClick = {this.onPixelClick.bind(this)} indexRow = {i} indexCol = {j}
                                colorPixel = {this.props.setcolor}
                                color ={this.state.tableau[this.changeCoordonnees(i, j)]}></Pixel>)
            }
            table.push(<div class="board-row">{row}</div>);
        }
        return <div>{table}</div>
    }

    changingColor()
    {
        if(this.state.changingcolor !== this.props.setcolor)
        {
            this.setState({changingcolor:this.props.setcolor})
        }
    }

    render(){

        let value_color = this.state.changingcolor;

        return(
            <div>
                {this.buildtable(this.props.nbRow,this.props.nbCol)}
                <button onClick={this.eraseBoard.bind(this)}>effacer le board</button>
                <button onClick={this.ctrlZ.bind(this)}>ctrlZ</button>
                <button onClick={this.changingColor.bind(this)} style={{backgroundColor: value_color}}>bouton</button>
            </div>

        )
    }
}

export default Board;


  