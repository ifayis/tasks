import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <h1>CLICK TO CHANGE THE THEME </h1>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
}

export default App
