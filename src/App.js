import './App.css';
import Board from './Board';
import React from "react";
import useState from 'react-hook-use-state';


function App(props) {

    function handleclick(e)
    {
        e.preventDefault()
        console.log("hello");
    }

    const [color, setColor] = useState("#FFFFFF")

  return (
    <div className="App">
        <Board nbCol={8} nbRow={8} setcolor={color}/>

        <input type="color" value={color} onChange={e => setColor(e.target.value)}/>

        <div>choisir le format</div>
        <input type="number" placeholder="Colonne" name={5} max={10} min={1}/>
        <input type="number" placeholder="Row" name={5} max={10} min={1}/>
        <button onClick={handleclick.bind(this)}>submit format</button>
    </div>
  );
}

export default App;
