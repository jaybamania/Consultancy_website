import React from "react";

const Advertisement = () => {
  return (
    <div className="advertisement-sec">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="add-content">
            <div className="add-con-img">
              <img
                src="media/images/skilled.png"
                alt="SKILLED ATTORNEYS WITH EXTENSIVE BACKGROUNDS"
              />
            </div>
            <p>SKILLED ATTORNEYS WITH EXTENSIVE BACKGROUNDS</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="add-content">
            <div className="add-con-img">
              <img
                src="media/images/aggerasive.png"
                alt="AGGRESSIVE CRIMINAL DEFENCE"
              />
            </div>
            <p>AGGRESSIVE CRIMINAL DEFENCE</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="add-content">
            <div className="add-con-img">
              <img
                src="media/images/experience.png"
                alt="EXPERIENCED COURTROOM PERFORMANCE"
              />
            </div>
            <p>EXPERIENCED COURTROOM PERFORMANCE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
