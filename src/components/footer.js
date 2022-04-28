import React from 'react';
import {Link} from 'react-router-dom'; 

function Footer() {
  return(
    <div class='container'>
      <footer class='row'>
        <div class='col'>
          <Link to='/'>Home</Link>
        </div>

        <div class='col'>
          <a href='mailto:wparkermackenzie@outlook.com'>
            E-Mail
          </a>
        </div>

        <div class='col'>
          <a href='https://www.linkedin.com/in/wmackenzie/'>
            LinkedIn
          </a>
        </div>

      </footer>
    </div>
  )
}

export {Footer};