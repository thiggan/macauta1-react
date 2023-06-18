import logo from './logo.svg';
import './App.css';
import Welcome from "./components/welcome"; // Importing the Welcome function component
import { useState } from "react"; // Import the useState hook from the react dependency


function App() 

  const basketballTeam = {
    center: "Joel Embiid",
    powerForward: "Anthony Davis",
    smallForward: "LeBron James",
    shootingGuard: "James Harden",
    pointGuard: "Stephen Curry",
  };

  const filterFruits = [
    "strawberry",
    "banana",
    "apple",
    "blueberry",
    "orange",
    "grape",
  ];

  const renderBasketballTeam = (data) => {
    return Object.entries(data).map(([key, value]) => (
      <li key={key}>{`${key} ${value}`}</li>
    ));
  };

  const displayTeam = (data) => {
    if (data) {
      return Object.entries(data).map(([key, value]) => (
        <li key={key}>{`${key} ${value}`}</li>
      ));
    } else {
      return <li>No Team Provided</li>
    }
  };

  const filterFruits1 = (data) => {

    if (data) {
      return Object.entries(data).map(([key, value]) => (
        <li key={key}>{`${key} ${value}`}</li>
      ));
    } else {
      return <li>No fruits provided</li>
    }
  }



  const renderFilterFruits = (fruits) => {
    return Object.entries(fruits).map(([key, value]) => (
      <li key={key}>{`${key} ${value}`}</li>
    ));

  }

  const Welcome = (props) => {
    return (
      <h1>Welcome {props.firstName}</h1> // Pass a prop called firstName
    )
  }

  const Counter = () => {
    const [count, setCount] = useState(0); // Local state variable called count.


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>


        <h1>Problem 1 - Render Basketball Team</h1>
        <ul>
          {renderBasketballTeam(basketballTeam)}
        </ul>

        <h1>Problem 2 - Refactor, On No Team Display</h1>
        <ul>
          {displayTeam(null)}
        </ul>

        <h1>Problem 3 - show fruits</h1>
        <ul>
          {renderFilterFruits(filterFruits)}
        </ul>

        <h1>Problem 4 Refactor fruits</h1>
        <ul>
          {filterFruits1(null)}
        </ul>

        <h1>using Welcome component</h1>
        <h1>Hello, World!</h1>
        <Welcome /> {/* Self-closing tag. <Welcome></Welcome> are equivalent */}
        <Welcome firstName="John" />


      
      <p>You clicked {count} times</p>{" "}
      {/* Rendering the count state variable in a <p> element. Note: we do not re-render any of the other elements */}
      <button onClick={() => setCount(count + 1)}>
        {" "}
        {/* Increment the count state variable by one */}
        Click me
      </button>
  


      </div>
  

    );


  };




  // export default App;
  export default Counter;



