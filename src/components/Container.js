import React from 'react';
// ! make sure you pass in props to your functional component
const Container = props => {
  // ** access to props from our app.js. look to the left of the equal sign to see what you named props
  // ** or console.llog props to see the data structure and how to navigate
  console.log('props from app.js', props);
  return (
    <div>
      {/* access the info you want using props */}
      <h1>{props.nasaData.title}</h1>
      {props.nasaData.date}
      <img src={props.nasaData.hdurl} alt={props.nasaData.title} />
    </div>
  );
};

export default Container;
