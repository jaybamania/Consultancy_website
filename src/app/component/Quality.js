import React from "react";

const Quality = () => {
  return (
    <div className="my-quality">
      <div className="container">
        <div className="my-quality-content">
          <div className="quality-topup">
            <div className="qtopuo-head">
              <img src="media/images/topup-icon.png" alt="Quality" />
              <h1>
                Quality You <br /> Can Trust
              </h1>
            </div>
            <div className="qtopup-body">
              <p>
                Over the past 12 years, over 2 million businesses and families
                have used Al-muehi for their Wills, Trademarks, LLCs and more.
              </p>
              <h4>With Al-muehi, your satisfaction is 100% guaranteed.</h4>
            </div>
          </div>

          <div className="quality-inner-spacer" />
          <div className="row justify-content-end">
            <div className="col-md-6 col-xs-12">
              <div className="quality-content-element">
                <i className="material-icons quality-start" aria-hidden="true">
                  star
                </i>
                <h1>
                  Get top quality legal documents Without paying top dollar
                </h1>
                <h3>The Huffington Post</h3>
              </div>
            </div>
          </div>
          <div className="quality-inner-spacer" />
        </div>
      </div>
    </div>
  );
};

export default Quality;
