import React from 'react';

const Contact = () => {
  return (
    <div className="parallax filter-gradient blue" data-color="blue">
        <div className="parallax-background">
            <img class ="parallax-background-image" src="assets/img/template/bg3.jpg"/>
        </div>
        <div className="info">
            <h3>Contact Us</h3>
            <p>You can contact <strong><a href="http://www.simple-conveyancing.co.uk/" target="_blank" title="Simple Low Cost Conveyancing">Simple Conveyancing</a></strong> easily. if you have any questions, please feel free to call us on&nbsp;0207 183 9912. Simple Conveyancing is an online business and is owned an operated by <a href="http://www.technicalproperty.co.uk">Technical Property</a>.&nbsp;</p>
            <p>Should you need to contact us by post, you can write to us at:&nbsp;</p>
            <div>Technical Property</div>
            <div>71-75 Shelton Street&nbsp;</div>
            <div>Covent Garden&nbsp;</div>
            <div>London</div>
            <div>WC2H 9JQ</div>
            <a href="mailto: info@technicalproperty.co.uk" className="btn btn-neutral btn-lg btn-fill">Contact Us</a>
        </div>
    </div> 
  );
}
