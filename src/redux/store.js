// import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const increment = createAction('myValue/increment')
// export const decrement = createAction('myValue/decrement')

// тип action который возвращает функция increment - 'myValue/increment'
// console.log(increment.toString())

// const myReducer = createReducer(10, {
//     // в квадратных скобках что б под капотом вызвать increment.toString() и получить имя свойства 'myValue/increment'
//     [increment]: (state, action) => state + action.payload,
//     // выглядит мутабельно, но под капотом IMMER делает всё иммутабельно.
//     [decrement]: (state, action) => state - action.payload,
// });

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//   },
// });
// ___________________________
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { myValueSlice } from './myValue/slice';
import { userReducer } from './userSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    // тут без return так как мы мутируем состояние.
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = itemsSlice.actions;

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
