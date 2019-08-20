import React,{useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {axiosWithAuth} from "../ultils/axiosWithAuth"
import { Form, Field, Formik, withFormik } from "formik";
import * as Yup from "yup";

const AddFriend = ({ errors, touched, values, status }) => {
    const [newFriends, setNewFriends] = useState([]);
  console.log("newFriends State", newFriends);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const url =
      "http://localhost:5000/api/friends";

    
      axiosWithAuth()
      axios
      
        .get(url, {
          headers: {
            Authorization: token
          }
        })
        .then(response => {
          const newFriends = (response.data)
          if (status) {
            setNewFriends([...newFriends, status]);
          }
        }
        )
        
        .catch(e => {
          console.log(e.response);
          localStorage.removeItem("token");
          // history.push("/");
        });
    
  }, [status]);


  return (
    <div className="form">
      <h1>Add Friend</h1>
      {/* <Formik> */}
      <Form>
        <Field type="text" name="name" placeholder="name" />
        {touched.name && errors.name && (
          <p callsName="error">{errors.name}</p>
        )}

        <Field type="text" name="age" placeholder="age" />
        {touched.age && errors.age && <p callsName="error">{errors.age}</p>}


        <button type="submit">Submit!</button>
      </Form>
      {newFriends.map(friend => (
        <p key={friend.id}>{friend.name}</p>
      ))}
    </div>
  );
};

const FormikAddFriend = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || "",
      age: values.age || "",

    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.string().required(),
   
  }),

  handleSubmit(values, {props}) {
    console.log("Form submited", values)

    axios
      .post(`http://localhost:5000/api/friends`, values)
      .then(res => localStorage.setItem('token', res.data.payload))
    //   .then(res => console.log("AddFriend res",res.data.payload))
    //   props.history.push("/FriendsList")
      
      
      
      .catch(err => console.log(err.response))
  }
})(AddFriend);

export default FormikAddFriend;
