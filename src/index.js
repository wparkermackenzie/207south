import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

/*
  This is where the fun starts. Call ReactDom.render with the following
  arguments to start the React application:
  - element :
    The element describes what will be described on the screen. In this case 
    it is JSX which contains a component like notation which tells React to 
    run the entire application in strict mode; this highlights potential
    problems in the application. 
    The component App is loaded to kick off the excitement.
  - container : 
    The application is rendered within the root of the HTML document (top level)
*/
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
