import React from 'react';


const Handle = ({handle: {id, value, percent}, getHandleProps}) => {
  return (
    <div className="handleStyle" style={{left: `${percent}%`}} {...getHandleProps(id)}/>
  );
}

export default Handle;
