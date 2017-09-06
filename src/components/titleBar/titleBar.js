import React from 'react';

import Name from './name';
import SocialLinks from './social_links';

const TitleBar = (props) => {
  const socialButtons = props.socialButtons.map((button)=> {
    return <SocialLinks socialButton={button} key={button.image}/>
  })

  return (
    <nav className="navbar">
      <Name/>
      <div className="floatRight">
        {socialButtons}
      </div>
    </nav>
  )
}

export default TitleBar;