import './App.css';
import Board from './Board';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
        <Board nbCol={5} nbRow={6}/>
        <Menu/>
    </div>
  );
}

export default App;
