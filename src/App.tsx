// import PostList from "./components/PostList";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";

// import { useReducer } from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
// import taskReducer from "./components/Tasks/TaskReducer";
// import UserContext from "./contexts/UserContext";
// import loginReducer from "./reducers/LoginReducer";
// import TaskContext from "./components/Tasks/TaskContext";
import UserProvider from "./components/AuthUser/UserProvider";
import TaskProvider from "./components/Tasks/TaskProvider";

// import LoginStatus from "./components/LoginStatus";

// import Counter from "./components/Counter";
// import TaskList from "./components/TaskList";


function App() {
  // const [tasks, dispatch] = useReducer(taskReducer, []);
    // const [user, dispatchUser] = useReducer(loginReducer, '');
  
  return (
    <>
    {/* <UserContext.Provider value={{user, dispatchUser}}> */}
    <UserProvider>
      {/* <TaskContext.Provider value={{tasks, dispatch}}> */}
      <TaskProvider>
      <NavBar />
      <HomePage />
      </TaskProvider>
      {/* </TaskContext.Provider> */}
      </UserProvider>
    {/* </UserContext.Provider> */}
    </>
  )
}

export default App;