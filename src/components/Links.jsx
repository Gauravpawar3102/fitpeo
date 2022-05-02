import React from 'react';
import { TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
function Links() {
  return (
    <div className="links-container  border-t-2 border-gray-200 p-4">
      <div className="Contact-me font-mono font-bold text-2xl">Contact-me:</div>
      <div className="social-links">
        <ul className=" flex  text-4xl items-center justify-around p-4">
          <li>
            <a href="https://www.linkedin.com/in/gaurav-pawar-9b1655198/">
              <TiSocialLinkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/GauravPawar2559">
              <TiSocialTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/Gauravpawar3102">
              <BsGithub />
            </a>
          </li>
        </ul>
        <div className="gmail-cont  flex  ">
          <div className="container flex justify-center items-center text-4xl text-blue-300 gap-2 p-2">
            <MdEmail />
            gauravpawar3102@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
