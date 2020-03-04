
import { createStore } from "redux";
import counterReducer from './counterReducer.js';


export default function  configureStore(state={count:0})
{
    return (createStore(counterReducer,state));
}