import React from 'react';

class SelectForm extends React.Component{
    render(){
        return (
            <div className='SelectForm'>
                <select>
                    <option value="point">point</option>
                    <option value="ligne">ligne</option>
                    <option value="cercle">cercle</option>
                </select>
            </div>
        )
    }
}

export default SelectForm;