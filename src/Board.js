import React from 'react';
import Format from './Components/Format';


class Pixel extends React.Component{
  constructor(props)
  {
    super(props)
    this.indexCol = this.props.indexCol;
    this.indexRow= this.props.indexRow;
    this.getColor = this.props.getColor;
    this.changecolor = this.changecolor.bind(this);
    this.state = {
      black: true
    }
  }

  changecolor()
  {
    /*alert("this pixel has been change at " + this.indexRow + "," + this.indexCol + " " + this.getColor);*/
    this.setState({black: !this.state.black})

    if(this.getColor === "black")
    {
      this.getColor = "white";
    }
    else
    {
      this.getColor = "black";
    }
  }

  render()
  {
    let btn_class = this.state.black ? "whiteButton" : "blackButton";
    let btn_white = "whiteButton";
    return(
      <button className={btn_class} onClick={this.changecolor}></button>
    )
  }
}     

class Board extends React.Component{ 

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
          {this.buildtable(8,9)}
        </div>
      )
    }
  }

  export default Board;
  