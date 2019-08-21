import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Form, Field, Formik, withFormik } from "formik";
import * as Yup from "yup";

const Login = ({ errors, touched, values }) => {
    const token = localStorage.getItem("token");

    // if (token) {
    //   return  <Redirect to="/FriendsList" /> 
    //   {/* && localStorage.removeItem("token") </> */}
    // }

  return (
    <div className="form">
      <h1>Login</h1>
      {/* <Formik> */}
      <Form>
        <Field type="text" name="username" placeholder="username" />
        {touched.username && errors.username && (
          <p callsName="error">{errors.username}</p>
        )}

        <Field type="text" name="password" placeholder="password" />
        {touched.password && errors.password && <p callsName="error">{errors.password}</p>}


        <button type="submit">Submit!</button>
      </Form>
      {/* </Formik> */}
      {/* //{users.map} */}
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || "",

    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
   
  }),

  handleSubmit(values, {props}) {
    console.log("Form submited", values)

    axios
      .post(`http://localhost:5000/api/login`, values)
      .then(res => localStorage.setItem('token', res.data.payload))
    //   .then(res => console.log("login res",res.data.payload))
    //   props.history.push("/FriendsList")
      
      
      
      .catch(err => console.log(err.response))
  }
})(Login);

export default FormikLogin;
