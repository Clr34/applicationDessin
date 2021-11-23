import React from 'react';

class Format extends React.Component{
    constructor(props)
    {
        super(props)
        this.changeformat = this.changeformat.bind(this);
        this.getCol = React.createRef();
        this.getRow = React.createRef();
    }

    changeformat()
    {
        alert("vous aller changer le format colonne: " + this.getCol.current.value + " ligne: " + this.getRow.current.value) ;

        const value = this.getCol.current.value*this.getRow.current.value;

        alert("Your going to creat " + value + " pixel");
    }

    render(){
        return (
            <span className='Format'>
                <div>choisir le format</div>
                <div>colonnes<input type="number" ref={this.getCol}/></div>
                <div>lignes<input type="number" ref={this.getRow}/></div>
                <button onClick={this.changeformat}>submit format</button>
            </span>
        )
    }
}

export default Format;