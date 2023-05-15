// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from 'redux/store';

import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

// export const Layout = () => {
//   const dispatch = useDispatch();
//   // получаем из всего состояние - конкретный кусок myValue
//   const value = useSelector(state => state.myValue);
//   return (
//     <div>
//       {value}
//       <button onClick={() => dispatch(increment(1))}>increment</button>
//       <button onClick={() => dispatch(decrement(1))}>decrement</button>
//     </div>
//   );
// };

// ___________________________
// import {useSelector ,useDispatch } from 'react-redux';
// import { decrement, increment } from 'redux/myValue/slice';
// import {   myValueSlice } from 'redux/store';

// export const Layout = () => {
//   const dispatch = useDispatch();
//   // получаем из всего состояние - конкретный кусок myValue
//   const value = useSelector(state => state.myValue);
//   return (
//     <div>
//       {value}
//       <button onClick={() => dispatch(increment(1))}>increment</button>
//       <button onClick={() => dispatch(decrement(1))}>decrement</button>
//     </div>
//   );
// };

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
