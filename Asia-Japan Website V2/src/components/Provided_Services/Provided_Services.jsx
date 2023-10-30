import React from "react";
import "./Provided_Services.css";

const Provided_Services = () => {
  return (
    <div>
      <section className="boxes">
        <div className="serv_boxes">
          <div className="box">
            <h4 className="service_h4 header_4">Served Country</h4>
            <h5 className="service_h5 header_5">Bangladesh & japan</h5>
          </div>
          <div className="box">
            <h4 className="service_h4 header_4">Experince</h4>
            <h5 className="service_h5 header_5">More than 25</h5>
          </div>
          <div className="box">
            <h4 className="service_h4 header_4">Served Client</h4>
            <h5 className="service_h5 header_5">More than 400</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Provided_Services;
