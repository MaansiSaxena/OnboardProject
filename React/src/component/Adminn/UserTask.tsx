import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../Header";
import { ITask } from "../Task.type";

const UserTask = () => {
  const [taskList, setTaskList] = useState([] as ITask[]);

  const [status, setStatus] = useState("Status");
  const [priority, setPriority] = useState("Priority");
  //   const [name, setName] = useState("");
  const name =localStorage.getItem("user");

  const priority_list = useSelector(
    (state: any) => state.task_detail_reducer.priority
  );
  const status_list = useSelector(
    (state: any) => state.task_detail_reducer.status
  );

  const UserTasks = (username:any) => {
    fetch(`https://localhost:44310/api/Task/GetUserTask/${username}`)
      .then((res) => res.json())
      .then((json) => {
        setTaskList(json.getTaskData);
      });
  };
  UserTasks(name);
//   setTaskList(UserTasks(name));

  return (
    <>
    <Header/>
    <div  style={{marginLeft:"45%" , marginTop:"6px", marginBottom:"10px"}}>
    <h3> {name}'s Task</h3>
    </div>
    <div>
      {" "}
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>DueDate </th>
              <th>
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  onChange={(e: any) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option selected hidden value={status}>
                    {status}
                  </option>
                  {status_list.map((status_task: string) => {
                    return <option value={status_task}>{status_task}</option>;
                  })}
                </select>
              </th>
              <th>
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  onChange={(e: any) => {
                    setPriority(e.target.value);
                  }}
                >
                  <option selected hidden value={priority}>
                    {priority}
                  </option>
                  {priority_list.map((priority_task: string) => {
                    return (
                      <option value={priority_task}>{priority_task}</option>
                    );
                  })}
                </select>
              </th>
              <th>AssignedTo</th>
            </tr>
          </thead>
          <tbody>
            {taskList
              ?.filter((task: ITask) => {
                if (status === "Status" && priority === "Priority") {
                  return task;
                } else if (status === "Status" && priority !== "Priority") {
                  return task.priority === priority;
                } else if (status !== "Status" && priority === "Priority") {
                  return task.status === status;
                } else {
                  return task.status === status && task.priority === priority;
                }
              })
              .map((task: ITask) => {
                const formattedDate = moment(task.dueDate).format(
                  "DD-MMM-YYYY"
                );
                return (
                  <tr>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{formattedDate}</td>
                    <td>{task.status}</td>
                    <td>{task.priority}</td>
                    <td>{task.assignedTo}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>{" "}
    </div>
    </>
  );
};

export default UserTask;
