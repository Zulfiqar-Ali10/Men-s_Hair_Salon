import React from 'react'

export default function Article() {
  return (
    <>
    <div className="space-medium">
  <div className="container">
    <div className="row">
      <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
        <div className="section-title mb40 text-center">
          {/* section title start*/}
          <h1>Latest News &amp; Article</h1>
        </div>
        {/* /.section title start*/}
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="post-block">
          <div className="row ">
            {/* post block */}
            <div className="col-md-6">
              <div className="post-img">
                <a href="#">
                  <img
                    src="images/post-img.jpg"
                    alt=""
                    className="img-responsive"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="post-content">
                <h2>
                  <a
                    href="https://easetemplate.com/"
                    className="title"
                    target="_blank"
                  >
                    {" "}
                    cosmetics website templates free download
                  </a>
                </h2>
                <p className="meta">
                  {" "}
                  <span className="meta-date"> 1 January 2018</span>{" "}
                  <span className="meta-comment">
                    <a href="# ">(12) Comments</a>
                  </span>{" "}
                  <span className="meta-author">
                    By <a href="#">Author</a>
                  </span>
                </p>
                <p>
                  Cras dolor arcu porttitor atfinibus idcondi mentum uttu rpis
                  one fuscenec justo idle libero pharetra posuere aliq uam
                  tempus is porttitor atfinibus.
                </p>
                <a href="#" className="btn btn-default">
                  Read More
                </a>{" "}
              </div>
            </div>
          </div>
          {/* /.post block */}
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
