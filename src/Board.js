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
      const title = "Application dessin"
      let btn_class = this.state.black ? "blueButton" : "whiteButton";
      return(
        <div>
          <h1>{title}</h1>
  
          <form onSubmit={this.Remove}>
            <button>Effacer</button>
            <input type="color"/>
            
            <select id="pet-select" onChange={this.selectCountry}>
              <option value="point">point</option>
              <option value="ligne">ligne</option>
              <option value="cercle">cercle</option>
            </select>
            
            <label>Choisir format<input type="text" value="10"/>,<input type="text" value="20"/></label>
            
          </form>
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
  