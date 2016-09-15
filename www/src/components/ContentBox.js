import React frmo 'react';

const ContentBox = ({ heading, content, image }) => {
  return (
    <div class="section">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <h4>{heading}</h4>
                  <p>{content}</p>
              </div>
              <div class="col-md-5 col-md-offset-1">
                  {image}
              </div>
          </div>
      </div>
    </div>
  )
}

Export default ContentBox;