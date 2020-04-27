import React from 'react';
import ClickCounter from './ClickCounter';

const Show = props => {
  return (
    <>
      <h2>{props.name}</h2>
      <h3>Description:</h3>
      <p>{props.description}</p>
      <ClickCounter buttonText="Like this show" message={`${props.name} likes`} />
    </>
  )
}

export default Show;