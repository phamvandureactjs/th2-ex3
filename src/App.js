import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import styles from "./styles.module.css";
function StyledText(){
  const StyledText = styled.h2`
  color: ${(props) => {
    if (props.numClicked % 2 === 0) {
      return "blue";
    }
    return "red";
  }};
`;
}


function App() {
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked((current) => {
      return current = current + 1;
    });
  };
  
  return (
    <div>
      <button onClick={handleClick} >Click here</button>
      <h2 style={{
        color: (numClicked % 2 === 0) ? 'blue' : 'red'
      }}
      >You clicked {numClicked} times</h2>
    </div>
  );
}

export default App;
