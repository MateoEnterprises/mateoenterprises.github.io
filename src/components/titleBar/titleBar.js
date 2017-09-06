import React from 'react';

import Name from './name';
import SocialLinks from './social_links';

const TitleBar = () => {
  return (
    <nav className="navbar">
      <Name/>
      <SocialLinks/>
    </nav>
  )
}

export default TitleBar;