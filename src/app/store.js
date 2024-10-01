import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/slice';
export const store = configureStore({
    reducer: todoReducer
})