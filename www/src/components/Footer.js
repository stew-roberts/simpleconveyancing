import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="social-area pull-right">
                <a className="btn btn-social btn-facebook btn-simple">
                <i className="fa fa-facebook-square"></i>
                </a>
                <a className="btn btn-social btn-twitter btn-simple">
                <i className="fa fa-twitter"></i>
                </a>
                <a className="btn btn-social btn-pinterest btn-simple">
                <i className="fa fa-pinterest"></i>
                </a>
            </div>
            <div className="copyright">
                &copy; 2016 <a href="http://www.technicalproperty.co.uk">Technical Property</a> - Software for the Property Sector
            </div>
        </div>
    </footer>
  )
}