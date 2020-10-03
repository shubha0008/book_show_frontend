import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './stylesheets/index.css';
import { HallList } from './Components/HallList'
import 'bootstrap/dist/css/bootstrap.css'; 
ReactDOM.render(

  <HallList/>,
  document.getElementById('root')
);