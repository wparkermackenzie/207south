import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/*
Return multiple elements in a fragment without adding extra
nodes to the Document Object Model.
<> </> is a shortcut for <React.Fragment> </React.Fragment>
*/

/**
 * Entry point function for the react application
 * @returns 
 */
function App() {

  return (
    /*
     An HTML Router is used to forward an incoming request to the 
     correct component, allowing an application to have multiple 
     views. For example, if the application www.myapp.com a request
     is made to www.myapp.com/myorders the application finds
     the path called /myorders appended to the URL. The router
     checks to see if there is a component associated with
     /myorders. If the application has a handler for this path,
     its component (function/class) is invoked. The react router allows
     this to happen while preserving user state.

     Anything outside of the BrowserRouter router component will be
     rendered on every page. As well as anything just before the 
     Routes. It is unclear to me if one method is prefered over the
     other or why. 

     More information: https://reactrouter.com/web/guides/quick-start 
    */

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>

  );
}

function Home() {
  return(
    <h1> Hello this is the foundation for my new website</h1>
  );
}

export default App;
