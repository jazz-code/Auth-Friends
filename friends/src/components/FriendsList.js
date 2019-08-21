import React, { useEffect, useState } from "react";
import axios from "axios"
import axiosWithAuth from "../ultils/axiosWithAuth"

import FormikAddFriend from "./AddFriend"

const FriendsList = ()=> {
  const [friends, setFriends] = useState([]);
  console.log("friends state",friends)
  
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
          const friends = (response.data)
          setFriends(friends)
        })
        .catch(e => {
          console.log(e.response);
          localStorage.removeItem("token");
          // history.push("/");
        });
    
  }, []);

  return (
    <>
      <div>Friends List</div>
     {friends.length}
    
     {friends.length > 0 ? friends.map(el => 
                <p> {el.name}</p>
            ): null}
            <FormikAddFriend friends={friends}/>
             
      {/* <button onClick={<FormikAddFriend friends={friends}/>}>
        Add a Friend
      </button> */}
    </>
  );
}

export default FriendsList;
