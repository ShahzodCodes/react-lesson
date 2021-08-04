import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Studets from './App';


ReactDOM.render(
  <React.StrictMode>
    <Studets />
    <Studets title='name is Shahzod.'/>
    <Studets title='surname is Yoqubov.'/>
    <Studets title='status is student.'/>
    <Studets title='ID is 21072003.'/>
    <Studets title='plan is to become a perfect web-developer.'/>
  </React.StrictMode>,
  document.getElementById('root')
);


