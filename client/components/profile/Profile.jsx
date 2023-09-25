import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/user/profile?email=" +
          localStorage.getItem("email")
      )
      .then((response) => {
        console.log(response.data.userData);
        setUserData(response.data.userData);
      });
  }, []);

  return (
    <div>
      <p>{userData.fname}</p>
      <p>{userData.lname}</p>
      <p>{userData.email}</p>
      <p>{userData.phone}</p>
      <p>{userData.city}</p>
      <p>{userData.state}</p>
      <p>{userData.country}</p>
      <p>{userData.pincode}</p>
      <p>{userData.address}</p>
    </div>
  );
};

export default Profile;
