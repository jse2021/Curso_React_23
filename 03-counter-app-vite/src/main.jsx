import React from "react";
import ReactDom from "react-dom/client";
// import { HelloWordApp } from "./HelloWordApp";
import { FirstApp } from "./FirstApp";
import './styles.css';
// import { CounterApp } from "./Counter.App";


// renderizo app
ReactDom.createRoot(document.getElementById('root')).render(

    <React.StrictMode >
        {/* <FirstApp tittle/> */}
        <CounterApp value={2}/>
    </React.StrictMode>
);

