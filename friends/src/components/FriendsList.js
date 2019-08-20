import React, { useEffect, useState } from "react";
import axios from "axios"
import {axiosWithAuth} from "../ultils/axiosWithAuth"

const FriendsList = ()=> {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    // const token = localStorage.getItem("token");
    const url =
      "http://localhost:5000/api/friends";

    // if (token) {
      axiosWithAuth()
      axios
      /*, {
          headers: {
            Authorization: `${token}`
          }
        } */
        .get(url)
        .then(response => {
          // setMessage(response.data.message)
          setMessage(console.log(response))
        })
        .catch(e => {
          console.log(e.response.data);
          localStorage.removeItem("token");
          // history.push("/");
        });
    
  }, []);

  return (
    <>
      <div>Friends List</div>
      <div>{message}</div>
      <button>
        Friends
      </button>
    </>
  );
}

export default FriendsList;
