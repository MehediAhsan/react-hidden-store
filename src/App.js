import { useState } from 'react';
import './App.css';
import Guns from './components/Guns/Guns';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count+1)

  return (
    <div>
      <Navbar count={count} />
      <Guns increaseCount={increaseCount} />
    </div>
  );
}

export default App;
