import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">Prajna</div>
          <div className="right">
            <p>Mangalore</p>
            <p>Open: 07:00 AM - 10:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Prajna</p>
          </div>
          <div className="right">
            {/* <p>All Rights Reserved By Prajna.</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;