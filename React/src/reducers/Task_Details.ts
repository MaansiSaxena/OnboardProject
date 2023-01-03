import { Task_Details } from "../actions";
import { ITask } from "../component/Task.type";

const initialState = {
  tasks: [],
};

const task_detail_reducer = (
  state = initialState,
  action: { type: string; info: ITask[] }
) => {
  switch (action.type) {
    case Task_Details:
      return { ...state, tasks: action.info };
    default:
      return state;
  }
};

export default task_detail_reducer;
