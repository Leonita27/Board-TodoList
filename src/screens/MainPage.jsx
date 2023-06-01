import React from 'react';
import ColumnComponent from '../components/Column';
import Colors from '../theme/color';

const MainPage = () => {
  return(
  <div className='flex justify-center'>
   <ColumnComponent title={"Ready to start"} color={Colors.red6}/>
  <ColumnComponent title={"Working on it"} color={Colors.orange}/>
  <ColumnComponent title={"Stuck"} color={Colors.blue3}/>
  <ColumnComponent title={"Done"} color={Colors.yellow}/>
  <ColumnComponent title={"Test"} color={Colors.green05}/>
  </div>
  );
};

export default MainPage;
