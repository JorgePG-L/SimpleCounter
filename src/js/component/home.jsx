import React from "react";

//include images into your bundle


//create your first component


const Home = (props) => {
	
	return (
  <>
  <div className="all">
  <div className="back ">
    <div className="fas fa-clock"></div>
    <div className="celda">0</div>
    <div className="celda">0</div>
    <div className="celda">{props.hours}</div>
    <div className="celda">{props.minutes}</div>
    <div className="celda">{props.seconds}</div>
  </div>
  </div>
  </>
			
	);
	 };

export default Home;
