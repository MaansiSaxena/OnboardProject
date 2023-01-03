import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Api from "./Api";
import { ITask } from "./Task.type";

const ConnectedUserlist = (HOC: any, data: any) => {
  const [userlist, setUserlist] = useState([]);
 // const [datas, setDatas] = useState()
  useEffect(() => {
    Api.GetUserList()
      .then((res) => res.json())
      .then((json) => setUserlist(json));

      // Api.GetTaskbyId()
      //   .then((res) => res.json())
      //   .then((json) => setDatas(json));
  }, 
  [userlist]);
//  console.log(datas)
  if (localStorage.getItem("username") === null) {
    return <Navigate to="/" />;
  }
  return (
    <div className="form-container">
      <HOC userlist={userlist} data={data}></HOC>
    </div>
  );
};

export default ConnectedUserlist;
