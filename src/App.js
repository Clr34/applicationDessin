import './App.css';
import Board from './Board';
import Menu from './Menu';
import React from "react";
import useState from 'react-hook-use-state';
import {ReactComponent} from "*.svg";

class App extends React.Component {


    const [color, setColor] = useState("#FFFFFF")
render {
    return(

<div className="App">
<Board nbCol= {
    8
}

nbRow=
{
    8
}
/>
<UpdateSizeBoard onchange={this.state.onchange}/>
<input type="color" value={color} onChange={e => setColor(e.target.value)}/>
{
    color
}
<button style={{backgroundColor: color}}>hello</button>
<Menu/>
</div>
)
;
}
    onchange(nbCol,nbRow)
    {
        this.setState({nbCol:nbCol,nbRow:nbRow})
    }
}

class UpdateSizeBoard extends React.Component{
    render() {
        return(
            <div>
                <input type="number"  placeholder="Colonne" name={5} max={10} min={1} ref={col}/>
                <input type="number"  placeholder="Row" name={5} max={10} min={1} ref={}/>
                <button>submit format</button>
            </div>
        )
    }
}

export default App;
