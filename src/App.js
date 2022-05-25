import './App.css';
import Header from './components/Header';
import Stickman from './components/Stickman';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';

function App() {
  return (
    <div>
      <Header />
      <div className='game-container'>
        <Stickman />
        <WrongLetters />
        <Word />
      </div>
    </div>
  )
}

export default App;
