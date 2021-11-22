import React from 'react';

class Format extends React.Component{
    render(){
        return (
            <span className='Format'>
                <div>choisir le format</div>
                <div>colonnes<input type="text" value="10"/></div>
                <div>lignes<input type="text" value="20"/></div>
            </span>
        )
    }
}

export default Format;