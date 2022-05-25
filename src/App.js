import './App.css';
import Header from './components/Header';
import Stickman from './components/Stickman';
import WrongLetters from './components/WrongLetters';

function App() {
  return (
    <div>
      <Header />
      <div className='game-container'>
        <Stickman />
        <WrongLetters />
      </div>
    </div>
  )
}

export default App;
