import React, {useState} from 'react';

const ClickCounter = props => {
  const [count, setCount] = useState(0);

  const increment = count => {
    setCount(count => count + 1);
  }

  return (
    <>
      <h2>{`${props.message}: ${count}`} <button onClick={increment}>{props.buttonText}</button></h2>
    </>
  );
}
 
export default ClickCounter;