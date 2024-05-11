import * as Yup from 'yup';
 
let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const  validationSchema = Yup.object({
    fullName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .min(5,   "Must be 5 characters or above")
              .required('Please enter your Full Name'),
    number: Yup.string()
              .max(11, 'Must be 11 characters or less')
              .min(11,   "Must be 11 characters or above")
              .required('Please enter your Number'),
    email: Yup.string()
              .email('Invalid email address')
              .matches(mailFormat, "Invalid email address")
              .required("Please enter your email"),
    password: Yup.string()
              .min(8, "Must be 8 chracter or higher")
              .max(20, "Must be 20 characters or less")
              .matches(
                passwordFormat,
                "Password is weak"
              )
              .required("Please enter your password"),
    conPass: Yup.string()
             .oneOf([Yup.ref("password"), null], "Passwords must match"),     
})