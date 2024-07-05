import { useState, useEffect } from 'react'
import './App.css'
import Heart from "react-animated-heart";

function App() {
  const [apiCalled, setApiCalled] = useState(false);
  const [isClick, setClick] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!apiCalled) {
      setApiCalled(true);
      fetch('https://for-diana-backend.vercel.app/thoughts')
        .then((res) => res.json())
        .then((data) => {
          setMessage(data.thought);
        });
    }
  }, []);

  function handleClick() {
    setClick(!isClick);
    const timer = setTimeout(() => {
      clearTimeout(timer);
    }, 900);
  }

  return (
    <>
      <h1>For Diana</h1>
      {
        message != "" && (
          <>
            <p>{message}</p>
            <p>- Lukas</p>
          </>
        )
      }
      <Heart isClick={isClick} onClick={handleClick} />
    </>
  )
}

export default App
