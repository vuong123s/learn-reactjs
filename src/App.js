import logo from './logo.svg';
import './App.css';
import NowTime from "./features/NowTime/index.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NowTime></NowTime>
      </header>
    </div>
  );
}

export default App;
