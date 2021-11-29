import React from 'react';
import Board from "../Board";

class Eraser extends React.Component{

    // remettre à jour le tableau
    erase()
    {
        window.board.eraseBoard(5,6);
    }

    render(){
        return <button onClick={this.erase}>Effacer</button>
    }
}

export default Eraser;