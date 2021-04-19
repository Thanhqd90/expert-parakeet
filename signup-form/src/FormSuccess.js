import React from "react";
import "./Form.css";

const FormSuccess = () => {
  return (
    <div className="form-content-bottom">
      <h1 className="form-success">
        Thank you for signing up for Availity. Please check your email to
        activate your account.
      </h1>
      <img
        className="form-img-success"
        src="https://pngimg.com/uploads/email/email_PNG36.png"
        alt="success"
      />
    </div>
  );
};

export default FormSuccess;
