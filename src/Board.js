import React from 'react';
import Format from './Components/Format';
import Eraser from "./Components/Eraser";
import useState from 'react-hook-use-state';

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
        let btn_class = this.props.color === 'white' ? "whiteButton" : "blackButton";
        /*let btn_class = ''
        if (this.props.color === 'white') {
            let btn_class = 'whiteButton'
        }
        else if (this.props.color === 'red'){
            let btn_class = 'redButton'
        }
        {let btn_class = 'backButton'}*/
        return(
            // création d'une case pixel
            <button className={btn_class} onClick={this.changeColor.bind(this)} id={this.indexRow+","+this.indexCol} >{this.indexRow+","+this.indexCol}</button>
        )
    }
}

function Color(props)
{
    const [color, setColor] = useState("#FFFFFF")

    return (
        <div>
            <input type="color" value={color} onChange={e => setColor(e.target.value)}/>{color}
            <button style={{backgroundColor: color}}>hello</button>
        </div>
    );
}

class Board extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            tableau: Array(this.props.nbRow).fill().map(() => Array(this.props.nbCol).fill('white')),
            history: []
        };
    }

    eraseBoard()
    {
        const newTableau = Array(this.props.nbRow).fill().map(() => Array(this.props.nbCol).fill('white'));
        this.setState({tableau: newTableau});
    }

    ctrlZ()
    {
        const histoire = [...this.state.history]
        const newTableau = histoire[histoire.length -2]
        this.setState({tableau: newTableau});
        console.log(histoire)
    }

    // action de cliquage sur un pixel
    onPixelClick(x, y) {
        // sauvegarde du state présent dans l'historique
        console.log('onclick');
        console.log(this.state.tableau);

        let histoire = [...this.state.history].concat(this.state.tableau);

        // modification du tableau
        let newTableau = [...this.state.tableau];
        newTableau[x][y] = 'black';


        this.setState({tableau: newTableau, history: histoire});
        console.log(histoire);
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
                row.push(<Pixel onPixelClick = {this.onPixelClick.bind(this)} indexRow = {i} indexCol = {j}
                                color ={this.state.tableau[i][j]}></Pixel>)
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
                <Color/>
                <button>Button Text</button>
            </div>

        )
    }
}

export default Board;


  