import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to ZeeHealthcare, your trusted partner in hospital management. We specialize in innovative healthcare technology designed to enhance patient care and streamline hospital operations. Founded by healthcare professionals and IT experts, our comprehensive Hospital Management System (HMS) addresses the unique challenges of the healthcare industry. Our solutions include secure electronic health records, efficient appointment scheduling, and robust inventory management, all with a focus on data security and privacy. At ZeeHealthcare, we are committed to supporting your facility’s growth with scalable, customizable solutions and dedicated support, ensuring exceptional care and operational excellence.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
            This is a demo for a Hospital Mangement Website!
          </p>
          
          <p>Coding is fun!</p>
          <p>I Love coding</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Biography;
