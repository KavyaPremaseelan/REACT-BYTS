import logo from './logo.svg';
import './App.css';
import Sample1 from './Sample1';

function App() {
  return (
    <div className="App">
      <Sample1 value={12} min={10} max={20}/>
    </div>
  );
}

export default App;
