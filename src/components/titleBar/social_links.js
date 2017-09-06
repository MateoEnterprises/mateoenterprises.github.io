import React, { Component } from 'react';

const SocialLinks = ({socialButton}) => {
  return (
    <a className="btn btn-social btnSocial" href={socialButton.imageLink} target="_blank">
      <span className={"fa fa-2x fa-" + socialButton.image}/>
    </a>
  )
}

export default SocialLinks;