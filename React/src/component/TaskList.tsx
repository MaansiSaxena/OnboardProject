import { useEffect, useState } from "react";
import { ITask } from "./Task.type";
import "../CSS/TaskList.style.css";
 
import Api from "./Api";
import moment from "moment";
import { useNavigate } from "react-router-dom";

type Props = {
  onDeleteClickHnd: (data: ITask) => void;
  onReject: (data: ITask) => void;
  pull_task: (data: ITask) => void;
};

const TaskList = (props: Props) => {
  const { onDeleteClickHnd, onReject, pull_task } = props;
  const [taskList, setTaskList] = useState([] as ITask[]);
  const [status, setStatus] = useState("Status");
  const [priority, setPriority] = useState("Priority");
  const [assign, setassign] = useState(false);

  useEffect(() => {
    if (assign) {
      Api.GetTaskAssignedByMe()
        .then((res) => res.json())
        .then((json) => {
          setTaskList(json.getTaskData);
        });
    } else {
      Api.GetUserTask()
        .then((res) => res.json())
        .then((json) => {
          setTaskList(json.getTaskData);
        });
    }
  }, [taskList, status, assign, priority]);

  const navigate = useNavigate();
  const handleReset = () => {
    setStatus("Status");
    setPriority("Priority");
    setassign(false);
  };
  const handleonclickassign = () => {
    setassign(true);
  };

  const onclickEdit = (data: ITask) => {
    pull_task(data);
    navigate("/edit");
  };

  return (
    <div>
      <article>
        <h3 className="list-header">Dashboard</h3>
      </article>
      <div style={{ marginLeft: "900px", marginBottom: "10px" }}>
        <input
          type="button"
          value="Assignbyme"
          onClick={handleonclickassign}
          className="add-employee-btn"
        />
        <input type="button" value="reset" onClick={() => handleReset()} />
      </div>
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
                <option selected hidden value="Status">
                  Status
                </option>
                <option value="InProgress">In Progress</option>
                <option value="ToDo">ToDo</option>
                <option value="Complete">Complete</option>
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
                <option selected hidden value="Priority">
                  {priority}
                </option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </th>
            <th>AssignedTo</th>

            <th>Action </th>
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
              const formattedDate = moment(task.dueDate).format("DD-MMM-YYYY");
              return (
                <tr>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{formattedDate}</td>
                  <td>{task.status}</td>
                  <td>{task.priority}</td>
                  <td>{task.assignedTo}</td>
                  <td>
                    <div>
                      <input
                        type="button"
                        value="Edit"
                        onClick={() => onclickEdit(task)}
                      />
                      <input
                        type="button"
                        value="Delete"
                        onClick={() => onDeleteClickHnd(task)}
                      />
                      <input
                        type="button"
                        value="Reject"
                        onClick={() => onReject(task)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default TaskList;








// import { useEffect, useState } from "react";
// import { ITask } from "./Task.type";
// import "../CSS/TaskList.style.css";
// import { useSelector, useDispatch } from "react-redux";
// import { edit_data, task_data } from "../actions";
// import Api from "./Api";
// import moment from "moment";
// import { Link, useNavigate } from "react-router-dom";

// type Props = {
//   onDeleteClickHnd: (data: ITask) => void;
//   onEdit: (data: ITask) => void;
//   onReject: (data: ITask) => void;
// };

// const TaskList = (props: Props) => {
//   const { onDeleteClickHnd, onEdit, onReject } = props;
//   const navigate = useNavigate();

//   const myState = useSelector((state: any) => state.task_detail_reducer.tasks);
//   const dispatch = useDispatch();

//   Api.GetUserTask()
//     .then((res) => res.json())
//     .then((json) => {
//       return dispatch(task_data(json.getTaskData));
//     });

//   return (
//     <div>
//       <article>
//         <h3 className="list-header">Dashboard</h3>
//       </article>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>DueDate </th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>AssignedBy</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {myState?.map((task: ITask) => {
//             const formattedDate = moment(task.dueDate).format("DD-MMM-YYYY");
//             return (
//               <tr>
//                 <td>{task.title}</td>
//                 <td>{task.description}</td>
//                 <td>{formattedDate}</td>
//                 <td>{task.status}</td>
//                 <td>{task.priority}</td>
//                 <td>{task.assignedBy}</td>
//                 <td>
//                   <div>
//                   {/* <Link to="/edit" state={{task:{task}}}> */}
//                     <input
//                       type="button"
//                       value="Edit"
//                       onClick={() => onEdit(task)}
//                       //onClick= {() => editdata(task.id)}

//                       // onClick={() =>{localStorage.setItem("Id",task.id.toString()); navigate("/edit") }}

//                     />
//                     {/* </Link> */}
//                     <input
//                       type="button"
//                       value="Delete"
//                       onClick={() => onDeleteClickHnd(task)}
//                     />
//                     <input
//                       type="button"
//                       value="Reject"
//                       onClick={() => onReject(task)}
//                     />
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default TaskList;
