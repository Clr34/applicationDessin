import React from 'react';
import Eraser from './Components/Eraser';
import Color from './Components/Color';
import SelectForm from './Components/SelectForm';
import Format from './Components/Format';

class Menu extends React.Component{
    render(){
        return (
            <div className='Menu'>
                <Eraser/>
                <Color/>
                <SelectForm/>
                <Format/>
            </div>
        )
    }
}

export default Menu;