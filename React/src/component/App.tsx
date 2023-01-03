import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import { useSelector, useDispatch } from "react-redux";
import { task_data } from "../actions";
import { ITask } from "./Task.type";
import { useEffect } from "react";
import Api from "./Api";
import Add from "./AddTask";
// import Edit from "./EditTask";
import { useLocation } from "react-router-dom";
import Edit from "./EditTask";

const App = () => {
  // const location = useLocation()
  // const {data}=location.state
  const myState = useSelector((state: any) => state.task_detail_reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    Api.GetUserTask()
      .then((res) => res.json())
      .then((json) => {
        return dispatch(task_data(json.getTaskData));
      });
  }, []);
  // const logout = () => {
  //   localStorage.removeItem("username");
  //   localStorage.removeItem("isSuccess");
  //   localStorage.removeItem("userDetails");
  // };

  return (
   
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<Add />} />
            {/* <Route path="/edit" element={<Edit />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
  
  );
};

export default App;
