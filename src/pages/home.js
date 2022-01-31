
/**
 * home.js
 * Landing page with a little bit about me.
 */

import img_lighthouse from '../media/lighthouse.svg'

function Home() {
  return(
    <>
    <img src={img_lighthouse}/>
    <h1>hello there</h1>
    </>
  );
}

export {Home};