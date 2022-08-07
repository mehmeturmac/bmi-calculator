import React from 'react';

function Footer() {
  return (
    <footer className="text-center flex flex-col py-1 px-10 bg-[palevioletred] rounded-t-md">
      <p>Coded by Mehmet Urmaç</p>
      <div className="flex items-center justify-center">
        <a target="blank" href="https://github.com/mehmeturmac">
          <img src="https://cdn.iconscout.com/icon/free/png-32/github-153-675523.png" alt="github" />
        </a>
        <a target="blank" href="https://www.linkedin.com/in/mehmeturmac/">
          <img src="https://cdn.iconscout.com/icon/free/png-32/linkedin-logo-3002013-2496129.png" alt="github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
