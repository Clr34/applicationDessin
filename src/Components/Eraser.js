import React from 'react';
import Board from "../Board";

class Eraser extends React.Component{

    erase()
    {
        window.board.eraseBoard(5,6);
    }

    render(){
        return <button onClick={this.erase}>Effacer</button>
    }
}

export default Eraser;