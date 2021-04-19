export default function validateInfo(values) {
  let errors = {};
  let email_regex = /\S+@\S+\.\S+/;

  if (!values.firstname.trim()) {
    errors.firstname = "First name required";
  }

  if (!values.lastname.trim()) {
    errors.lastname = "Last name required";
  }

  if (!values.npinumber.trim()) {
    errors.npinumber = "NPI number required";
  }

  if (!values.address.trim()) {
    errors.address = "Address required";
  }

  if (!values.phonenumber.trim()) {
    errors.phonenumber = "Phone number required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!email_regex.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  return errors;
}
