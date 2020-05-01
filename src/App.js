import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Axios from 'axios';
import Container from './components/Container';
function App() {
  // ** step 1 -> capture values in state
  const [nasaData, setNasaData] = useState('');
  // ** step 2 -> implement use effect
  useEffect(() => {
    // ** step 3 -> call axios and do a get request to the nasa database
    Axios.get(
      'https://api.nasa.gov/planetary/apod?api_key=7tg8kKz4HbuRHGv0lrEdP7tozN75cDf9DzUdAju9'
    )
      .then(response => {
        // !! currently unsure where this data exists
        // ? placeholder until we figure out what our data is
        console.log('nasa response', response);
        // ** step 4 -> set my nasa data to equal the response we get from nasa
        setNasaData(response.data);
      })
      .catch(err => {
        // ** step 5 handle the error response
        console.log('nasa data get request error', err);
      });
    // ** step 6 -> implement a dependency array so that the call only runs when data is updated "[]"
    // ! this prevents infinte loop
  }, []);
  console.log('data from nasa that lives in our state', nasaData);
  return (
    <div className="App">
      <Navigation />
      {/* Creating a new component and passing props from nasaData to the container component */}
      {/* to the left of the equal sign is what we call props to the right is the data we pass to props */}
      {/* this nasaData comes from our state that was captured by our axios call */}
      <Container nasaData={nasaData} />
    </div>
  );
}

export default App;
