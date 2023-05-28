import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider,} from "react-router-dom";

// import MemoHook from './06-memos/MemoHook'
// import CallbackHook from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import Memorize from './06-memos/Memorize'
// import MultiplesCustomHooks from './03-example/MultiplesCustomHooks'
// import FocusScreen from './04-useRef/FocusScreen'
// import {CounterApp} from "./01-useState/CounterApp";
// import {CounterWithCustomHook} from "./01-useState/CounterWithCustomHook";
// import SimpleForm from './02-useEffect/SimpleForm';
// import FormWithCustomHook, {  } from "./02-useEffect/FormWithCustomHook";
// import './08-useReducer/intro-reducer'
// import TodoApp from './08-useReducer/TodoApp'
import MainApp from './09-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
		<BrowserRouter>
			<MainApp />
		</BrowserRouter>
	</React.StrictMode>
  
)
