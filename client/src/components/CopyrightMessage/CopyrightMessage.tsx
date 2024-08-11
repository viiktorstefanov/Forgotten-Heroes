import React from 'react';
import { copyrights } from '../../constants/copyrights';

const CopyrightMessage: React.FC = () => {
  return (
    <p>{copyrights.copyrightMessage}</p>
  )
}

export default CopyrightMessage;
