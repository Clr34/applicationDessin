import './App.css';
import Board from './Board';
import React from "react";
import useState from 'react-hook-use-state';

function App(props) {
    const [color, setColor] = useState("#FFFFFF")

  return (
    <div className="App">
        // appelle du composant board avec les deux paramètres, le nombre de lignes et le nombre de colonnes
        <Board nbCol={8} nbRow={8} color={color}/>

        // balise permettant de modifier la couleur d'un bouton
        <input type="color" value={color} onChange={e => setColor(e.target.value)}/>{color}
        <button style={{backgroundColor: color}}>button color</button>

        // balise permettant de déterminer la taille en pixel le board
        <div>choisir le format</div>
        <input type="number" placeholder="Colonne" name={5} max={10} min={1}/>
        <input type="number" placeholder="Row" name={5} max={10} min={1}/>
        <button>submit format</button>
    </div>
  );
}

export default App;
