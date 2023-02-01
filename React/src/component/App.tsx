import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import { useSelector, useDispatch } from "react-redux";
import { task_data } from "../actions";
import { ITask } from "./Task.type";
import { useEffect, useState } from "react";
import Api from "./Api";
import Add from "./AddTask";
import Edit from "./EditTask";
import MainPage from "./MainPage";
import LoginAdmin from "./Adminn/LoginAdmin";
import AdminHome from "./Adminn/AdminHome";
import AddNewUser from "./Adminn/AddNewUser";
import GetAllUser from "./Adminn/GetAllUser";
import UserTask from "./Adminn/UserTask";

const App = () => {
  const [task, settask] = useState({} as ITask);

  const myState = useSelector((state: any) => state.task_detail_reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    Api.GetUserTask()
      .then((res) => res.json())
      .then((json) => {
        return dispatch(task_data(json.getTaskData));
      });
  }, []);

  const pull_data = (data: ITask) => {
    settask(data);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/" element={<MainPage />} />

          <Route
            path="/home"
            element={<Home pull_data_for_edit={pull_data} />}
          />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit data={task} />} />
          <Route path="/Admin/login" element={<LoginAdmin />} />
          <Route path="/Admin/home" element={<AdminHome />} />
          <Route path="/Admin/addnewuser" element={<AddNewUser />} />
          <Route path="/Admin/getalluser" element={<GetAllUser />} />
          <Route path="/Admin/usertask" element={<UserTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
