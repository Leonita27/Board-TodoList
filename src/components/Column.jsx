import React from 'react';


const ColumnComponent = ({title,color}) => {
  return (
    <div className="flex bg-black" style={{backgroundColor: color}}>
    
    <h1 className="text-3xl font-bold underline">
   {title}
  </h1>
  <div>
  </div>
  </div>
  );
}

export default ColumnComponent;
