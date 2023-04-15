import './App.css';
import Assign from './components/assing/Assign';
import Block from './components/block/Block';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <Block/>
        <Assign/>
        <Header />

      </div>
    </div>
  );
}

export default App;
