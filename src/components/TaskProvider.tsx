import { useReducer, type ReactNode } from "react";
import taskReducer from "../reducers/TaskReducer";
import TaskContext from "../contexts/TaskContext";

interface Props {
    children: ReactNode;
}

function TaskProvider( {children}: Props ) {
  const [tasks, dispatch] = useReducer(taskReducer, []);
    return <TaskContext.Provider value={{tasks, dispatch}}>
        {children}
    </TaskContext.Provider>
}

export default TaskProvider;