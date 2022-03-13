import {Link} from 'react-router-dom'; 

function Footer() {
  return(
    <footer>
      <Link to='/'>Home</Link>|{" "}

      <a href='mailto:wparkermackenzie@outlook.com'>
        E-Mail
      </a>|{" "}

      <a href='https://www.linkedin.com/in/wmackenzie/'>
        LinkedIn
      </a>

    </footer>
  )
}

export {Footer};