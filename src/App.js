import './App.css';
import { useState, useEffect } from 'react';

// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h3>Age: {props.age}</h3>
//     </>
//   )
// }

const App = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   // alert('Reload') something that will happen each time the page is loaded
  //   alert("You've changed the count to " + counter)
  //   // setCounter(100);
  // }, [counter]) //this is dependency array which will only load once the page loads and allows you to set the counter at 100 but still modify it with either button

  return (
      <div className="App">
      {/* Example from the video fo how props work

      <Person
      name = "D'Camron"
      lastName="Dunlap"
      age={29}/>
      <Person
      name = "Clara"
      lastName="Dunlap"
      age={25}/> */}

      {/* <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button> */}

    </div>
  );
}

export default App;
