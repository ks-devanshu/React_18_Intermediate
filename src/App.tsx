import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import TaskProvider from "./components/Tasks/TaskProvider";
import Counter from "./components/Counter/Counter";

function App() {  
  return (
    <>
      <TaskProvider>
      <Counter />
      <NavBar />
      <HomePage />
      </TaskProvider>
    </>
  )
}

export default App;