import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar navbar-transparent navbar-top" role="navigation">
      <div className="container">
          <div className="navbar-header">
            <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar bar1"></span>
              <span className="icon-bar bar2"></span>
              <span className="icon-bar bar3"></span>
            </button>
            <a href="http://www.simple-conveyancing.co.uk">
              <div className="logo-container">
                <div className="brand">
                  <h1>Simple Conveyancing</h1>
                </div>
              </div>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="example" >
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#home">Home</a></li>
              <li><a href="#get-a-quote">Get a Quote</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
    </nav>
  );
}

export default Navigation;