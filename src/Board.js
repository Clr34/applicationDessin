import React from 'react';
//import Color from './Components/Color';


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
    alert("this pixel has been change at " + this.indexRow + "," + this.indexCol + " " + this.getColor);
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
    render(){
      return(
        <div>
        <div className="board-row">
          <Pixel indexRow = {1} indexCol = {1} getColor = "White"></Pixel>
          <Pixel indexRow = {1} indexCol = {2} getColor = "White"></Pixel>
          <Pixel indexRow = {1} indexCol = {3} getColor = "White"></Pixel>
        </div>

        <div className="board-row">
          <Pixel indexRow = {2} indexCol = {1} getColor = "White"></Pixel>
          <Pixel indexRow = {2} indexCol = {2} getColor = "White"></Pixel>
          <Pixel indexRow = {2} indexCol = {3} getColor = "White"></Pixel>
        </div>

        <div className="board-row">
          <Pixel indexRow = {3} indexCol = {1} getColor = "White"></Pixel>
          <Pixel indexRow = {3} indexCol = {2} getColor = "White"></Pixel>
          <Pixel indexRow = {3} indexCol = {3} getColor = "White"></Pixel>
        </div>
        </div>
      )
    }
  }

  export default Board;
  