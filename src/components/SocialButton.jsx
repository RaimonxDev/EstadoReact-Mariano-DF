import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialButton = ({ face, link, git }) => {
  return (
    <div>
      <div className="mb-2 d-flex justify-content-around">
        {face && (
          <div className="icons">
            <BsFacebook size={25} />
          </div>
        )}
        {git && (
          <div className="icons">
            <BsGithub size={25} />
          </div>
        )}
        {link && (
          <div className="icons">
            <FaLinkedinIn size={25} />
          </div>
        )}
      </div>
    </div>
  );
}

export default SocialButton;
