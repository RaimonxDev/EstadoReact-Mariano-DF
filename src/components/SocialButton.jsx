import React from 'react';

const SocialButton = ({ face, link, git }) => {
  return (
    <div>
      <div className="mb-2 d-flex justify-content-around">
      <div className="icon">{face}</div>
      <div className="icon">{git}</div>
      <div className="icon">{link}</div>
      </div>

    </div>
  );
}

export default SocialButton;
