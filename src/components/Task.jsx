import React from 'react';


const TaskComponent = ({title,description}) => {
  return (
    <div className="flex bg-black" style={{backgroundColor: color}}>
    
    <h1 className="text-3xl font-bold underline">
   {title}
  </h1>
  <p className="text-3xl">
   {description}
  </p>
  <div>
  </div>
  </div>
  );
}

export default TaskComponent;
