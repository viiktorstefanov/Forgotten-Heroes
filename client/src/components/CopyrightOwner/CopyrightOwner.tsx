import React from 'react';
import { Link } from "react-router-dom";import { copyrights } from '../../constants/copyrights';
;

const CopyrightOwner: React.FC = () => {

    const currentYear = new Date().getFullYear();
    
  return (
    <p>
          &copy; {currentYear} Copyright:{" "}
          <Link className="footer-link" target="_blank" to={copyrights.linkedInUrl}>
            {copyrights.owner}
          </Link>
    </p>
  )
}

export default CopyrightOwner;
