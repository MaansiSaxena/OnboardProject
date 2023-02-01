import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../Api";
import { Header } from "../Header";

const AdminHome = () => {
  const [userlist, setUserlist] = useState([]);
  const navigate = useNavigate();

  Api.GetUserList()
    .then((res) => res.json())
    .then((json) => setUserlist(json));

  // const Removeuser = () => {
    
  // };

  return (
    <div>
      <Header />
      <article>
        <div className="d-flex flex-column" style={{ marginLeft: "15px" }}>
          {userlist.map((user) => {
            return (
              <button
                className="btn btn-secondary "
                style={{ marginTop: "5px", width: "80px" }}
                onClick={() => {
                  navigate("/admin/usertask");

                  localStorage.setItem("user", user);
                }}
              >
                {user}
              </button>
            );
          })}
        </div>
        <hr />
        <Link to="/Admin/addnewuser">
          <button
            className="btn btn-secondary mt-5"
            style={{ marginLeft: "15px" }}
          >
            Add new User
          </button>
        </Link>
        <button
          className="btn btn-danger mt-5"
          style={{ marginLeft: "50px" }}
          // onClick={() => {
          //   Removeuser;
          // }}
        >
          Remove user
        </button>
      </article>
      <br />
    </div>
  );
};

export default AdminHome;
