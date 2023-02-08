//1. Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import something from somelocation/somelibrary
import MyComponent1 from './MyComponent1';

//2. Function Defination area


//2.
const root = ReactDOM.createRoot(document.querySelector('div#container'));
root.render(
  <React.StrictMode>
    <MyComponent1 />
  </React.StrictMode>
);

//3. 


