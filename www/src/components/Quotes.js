import React from 'react';

const Quotes = () => {
  return (
    <div className="section section-presentation" id="get-a-quote">
        <div className="container">
            <div className="row">
                <div className="description">
                    <h4 className="header-text">Get a Quote</h4>
                    <h4>Online <em>simple conveyancing</em> quotes from solicitors and conveyancers</h4>
                    <p>We've combined a large nationwide panel of solicitors with the latest simple conveyancing comparison plugin technology to provide cheap cost efficient conveyancing quotes. Once you find the quote you are happy with, instruct the solicitor or conveyancer of your choice, and everything is transmitted immediately online and electronically.</p>
                    <div id="conveyancing-quotes"></div>
                    <script type="text/javascript">// <![CDATA[
                        var tcnconfig = {
                        license: '5401A685-AC71-49AD-B9511F2FC3982B59', /* This is where you put your unique license key */
                        container: 'conveyancing-quotes' /* This is the unique id of your container */
                        };
                        (function() { var tcnjs = document.createElement('script'); tcnjs.type = 'text/javascript'; tcnjs.async = true;
                        tcnjs.src = 'https://conveyancing.acquir-e.com/engine.min.js?' + Math.random();
                        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tcnjs, s);
                        })();
                        // ]]>
                    </script>
                </div>
            </div>
        </div>
    </div>
  )
}