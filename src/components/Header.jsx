import React from 'react'

export default function Header() {
  return (
   <>
   <div className="header">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <a href="index.html">
          <img
            src="/images/logo.png"
            alt="Hair Salon Website Templates Free Download"
          />
        </a>
      </div>
      <div className="col-lg-8 col-md-4 col-sm-12 col-xs-12">
        <div className="navigation">
          <div id="navigation">
            <ul>
              <li className="active">
                <a href="index.html" title="Home">
                  Home
                </a>
              </li>
              <li className="has-sub">
                <a href="service-list.html" title="Service List">
                  Service List
                </a>
                <ul>
                  <li>
                    <a href="service-list.html" title="Service List">
                      Service List
                    </a>
                  </li>
                  <li>
                    <a href="service-detail.html" title="Service Detail">
                      Service Detail
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-sub">
                <a href="blog-default.html" title="Blog ">
                  News
                </a>
                <ul>
                  <li>
                    <a href="blog-default.html" title="Blog">
                      Blog Default
                    </a>
                  </li>
                  <li>
                    <a href="blog-single.html" title="Blog Single ">
                      Blog Single
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" title="Features">
                  Features
                </a>
                <ul>
                  <li>
                    <a href="testimonial.html" title="Service List">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a href="styleguide.html" title="Service Detail">
                      Style Guide
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html" title="Contact Us">
                  Contact
                </a>{" "}
              </li>
              <li>
                <a href="styleguide.html" title="Styleguide">
                  styleguide
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}



