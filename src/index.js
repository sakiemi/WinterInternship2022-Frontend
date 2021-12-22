import "./styles/main.scss";
import './index.html';
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from "./App";
//This is an example of how to load an external JS module inside this one, please remove the following 2 lines
import { getCurrentDate } from './exampleModule';
console.log(getCurrentDate())

ReactDOM.render(<h1>Hii</h1>, document.getElementById('root'));