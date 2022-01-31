// 3rd party libraries
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Pages
import {Home} from './pages/home.js';

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

     This means all of the pages associated with the client side routes
     are downloaded to the client upon loading of the website. 

     If a client route is not indicated in the following list of 
     routes then it means references will use server side routing,
     in which a new page will be loaded (an HTTP request of the server)
     each time the link is selected.

     More information: https://reactrouter.com/web/guides/quick-start 
    */

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
