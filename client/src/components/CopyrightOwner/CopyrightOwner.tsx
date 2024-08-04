import React from 'react';
import { Link } from "react-router-dom";;

const CopyrightOwner: React.FC = () => {

    const currentYear = new Date().getFullYear();
    
  return (
    <p>
          &copy; {currentYear} Copyright:{" "}
          <Link className="footer-link" target="_blank" to="https://www.linkedin.com/in/viktorstefanov">
            Viktor Stefanov
          </Link>
    </p>
  )
}

export default CopyrightOwner;
