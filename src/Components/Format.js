import React from 'react';

class Format extends React.Component{
    constructor(props)
    {
        super(props)
        this.changeformat = this.changeformat.bind(this);
        this.getCol = React.createRef();
        this.getRow = React.createRef();
        window.row_col = this;
    }

    changeformat()
    {
        alert("vous aller changer le format colonne: " + this.getCol.current.value + " ligne: " + this.getRow.current.value) ;

        const value = this.getCol.current.value*this.getRow.current.value;

        alert("Your going to creat " + value + " pixel");
    }

    getFormatRow()
    {
        return 6;
    }

    getFormatCol()
    {
        return 3;
    }

    render(){
        return (
            <span className='Format'>
               <div>choisir le format</div>
                <input type="number" ref={this.getCol} placeholder="Colonne" name={5} max={10} min={1}/>
                <input type="number" ref={this.getRow} placeholder="Row" name={5} max={10} min={1}/>
               <button onClick={this.changeformat}>submit format</button>
           </span>
        )
    }
}

export default Format;

