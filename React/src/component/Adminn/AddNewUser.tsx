import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../Header";

const AddNewUser = () => {
  const [username, setusername] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("https://localhost:44310/api/Task/CreateNewUser", {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/Admin/home");
  };
  return (
    <>
      <Header />
      <h3 style={{marginLeft:"40%", marginTop:"2%"}}>Add New User</h3>
      <div className="container" style={{marginLeft:"40%", marginTop:"3%"}}>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input style={{width: "30%"}}
              type="textarea"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
              onChange={(e: any) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input style={{width: "30%" }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e: any) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <Link to="/Admin/home">
            <button className="btn btn-secondary" style={{marginLeft:"1%"}}>Back</button>
          </Link>
          <button style={{marginLeft:"5%"}}
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNewUser;
