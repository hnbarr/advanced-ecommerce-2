import React from 'react';

function TopNav(props){

    let handleClick = (e) => {
        e.preventDefault() 
        console.log(e)
        props.changeCategory(e.target.id)
    }

    return(
      <div className="top-nav">
        <ul>
            <li><a href="#" onClick={handleClick} id='headlights'>car lights</a></li>
            <li><a href="#" onClick={handleClick} id='tires'>Car wheels</a></li>
            <li><a href="#" onClick={handleClick} id='bumpers'>car bumpers</a></li>
            <li><a href="#" onClick={handleClick} id='audio'>car audiosystem</a></li>
            <li><a href="#" onClick={handleClick} id='bumpers'>Truck bumpers</a></li>
            <li><a href="#" onClick={handleClick} id='feedback'>Feedback</a></li>
            <div className="clear"> </div>
        </ul>
      </div>
    );
}

export default TopNav;