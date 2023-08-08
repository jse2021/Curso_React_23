import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice';

function App() {


  // leer algo del store
  // del state, necesito el counter del counterSlice
  const {counter} = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is: {counter}</h1>
      <div className="card">
          <button type='button' onClick={() => dispatch( increment () )}>
            increment
          </button>
          
          <button type='button' onClick={() => dispatch( decrement () )}>
            decrement
          </button>
          <button type='button' onClick={() => dispatch( incrementBy (2) )}>
            increment By 2
        </button>
      </div>
    
    </>
  )
}

export default App
