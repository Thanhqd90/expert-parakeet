import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-bottom">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Create your account by filling your information below.</h1>
        <div className="form-inputs">
          <label className="form-label">First Name</label>
          <input
            className="form-input"
            type="text"
            name="firstname"
            placeholder="Enter your First name"
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Last name</label>
          <input
            className="form-input"
            type="text"
            name="lastname"
            placeholder="Enter your last name"
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">NPI number</label>
          <input
            className="form-input"
            type="number"
            name="npinumber"
            placeholder="Enter your NPI number"
            value={values.npinumber}
            onChange={handleChange}
          />
          {errors.npinumber && <p>{errors.npinumber}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Business address</label>
          <input
            className="form-input"
            type="text"
            name="address"
            placeholder="Enter your business address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Telephone number</label>
          <input
            className="form-input"
            type="number"
            name="phonenumber"
            placeholder="Enter your telephone number"
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
