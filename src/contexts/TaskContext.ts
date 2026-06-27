import type { Dispatch } from "react";
import type { Task, TaskAction } from "../reducers/TaskReducer";
import React from "react";


interface TaskContextType {
    tasks: Task[];
    dispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);
export default TaskContext;