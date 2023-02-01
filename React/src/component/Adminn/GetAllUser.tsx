import { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../Api";

const GetAllUser = () => {
  const [userlist, setUserlist] = useState([]);

  Api.GetUserList()
    .then((res) => res.json())
    .then((json) => setUserlist(json));

  return (
    <div>
      <h2>List of All Users</h2>
      {userlist.map((user) => {
        return <p>{user}</p>;
      })}
      <Link to="/Admin/home">
        <button className="btn btn-secondary">Back</button>
      </Link>
    </div>
  );
};

export default GetAllUser;
