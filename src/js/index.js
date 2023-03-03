//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds = 0;
let minutes = 0;
let hours = 0;

const contador =() =>{
    seconds++; 
    if (seconds>59){
        minutes++;
        seconds =0;
    }
    if (minutes >59){
        minutes =0;
        hours ++;
    }



   
    ReactDOM.render(
    <Home 
    seconds={seconds}
    minutes={minutes} 
    hours={hours}
    />, 
    document.querySelector("#app"));
}



setInterval(() => {
    contador()
},1000)