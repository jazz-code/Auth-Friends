import React,{useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../ultils/axiosWithAuth"
import { Form, Field, Formik, withFormik } from "formik";
import * as Yup from "yup";

const AddFriend = ({ errors, touched, values, status }) => {
    const [credentials, setCredentials] = useState({username: "", password: ""});
    
//   console.log("newFriends State", newFriends);
  
//   useEffect(() => {
//     if (status) {
//       setNewFriends([...newFriends, status]);
//     }
//   }, [status]);


  return (
    <div className="form">
      <h1>Add A Friend</h1>
   
      <Form>
    
        <Field type="text" name="name" placeholder="name" />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <Field type="text" name="age" placeholder="age" />
        {touched.age && errors.age && <p className="error">{errors.age}</p>}

        <Field type="text" name="email" placeholder="email" />
        {touched.email && errors.email && <p className="error">{errors.email}</p>}


        <button type="submit">Submit!</button>
      </Form>
      {/* {newFriends.map(friend => (
        <p key={friend.id}>{friend.name}</p> 
      ))}*/}
    </div>
  );
};

const FormikAddFriend = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || "",
      age: values.age || "",
      email: values.email || "",

    };
  },

  validationSchema: Yup.object().shape({
    
    name: Yup.string().required(),
    age: Yup.string().required(),
    email: Yup.string().required(),
   
  }),

  handleSubmit(values) {
    
    axiosWithAuth()
        .post("http://localhost:5000/api/friends", values)
      
      .then(res => localStorage.setItem('token', res.data))
      //localStorage.setItem('token', res.data.payload)
    //   .then(res => console.log("AddFriend res",res.data.payload))
    //   props.history.push("/FriendsList")
      
      
      
      .catch(err => console.log(err.response))
  }
})(AddFriend);

export default FormikAddFriend;
