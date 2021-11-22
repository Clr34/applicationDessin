import React from 'react';

class Board extends React.Component{
    constructor(){
           super();
  
           this.state = {
                black: true
           }
      }
  
      changeColor(){
        //event.preventDefault();
          this.setState({black: !this.state.black})
      }
    
      Remove(event) {
        event.preventDefault();
        alert("you are going to remove your pixels");
      }
  
      selectCountry = (e) => {
        alert("fffffff");
      }
  
    
    render(){
      let btn_class = this.state.black ? "blueButton" : "whiteButton";
      return(
        <div>
          <button className={btn_class}
                           onClick={this.changeColor.bind(this)}></button>
          <button className={btn_class}
                           onClick={this.changeColor.bind(this)}></button>
          <button className={btn_class}
                           onClick={this.changeColor.bind(this)}></button>
        </div>
      )
    }
  }

  export default Board;
  