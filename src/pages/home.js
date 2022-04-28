import React from 'react';

/**
 * home.js
 * Landing page with a little bit about me.
 */

import img_lighthouse from '../media/lighthouse.svg'

function Home() {
  return(
    <>
    <div class="container">
      <div class='row align-items-center'>
        <div class='col-sm-1'>
            <img src={img_lighthouse} height={64} alt='A lighthouse' />
        </div>
        <div class='col'>
            <h1>Welcome to 207South</h1>
        </div>
      </div>
        <p class='lead'>
          First and foremost, this is my online playground for experimenting and learning new (and some not so new) technologies. I am unapologetic in the completeness of any work you may find here; much of what you will find here are experiments. The minimum viable product is to learn something to either satisfy a curiosity or to enhance my career.

          Second, this site allows you to get to know who I am as an engineer; whether it is to collaborate on an open source project, an aid in evaluating my skillset for an upcoming private project, or simply read the ramblings of a like minded individual.

          Last but not least, it is a place to give back in the hope that I may be as much help, as others have been for me.

          I have included numerous ways I may be contacted; whether it is social media or an e-mail, I look forward to hearing from you. More information about me may be found in my resume.
        </p>
    </div>
    </>
  );
}

export {Home};