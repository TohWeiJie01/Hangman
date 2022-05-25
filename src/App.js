import './App.css';
import Header from './components/Header';
import Stickman from './components/Stickman';

function App() {
  return (
    <div>
      <Header />
      <div className='game-container'>
        <Stickman />
      </div>
    </div>
  )
}

export default App;
