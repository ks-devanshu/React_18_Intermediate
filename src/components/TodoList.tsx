// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import useTodos from '../hooks/useTodos';

// interface Todo {
//   id: number;
//   title: string;
//   userId: number;
//   completed: boolean;
// }

const TodoList = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/todos')
//       .then((res) => setTodos(res.data))
//       .catch((error) => setError(error));
//   }, []);

//   if (error) return <p>{error}</p>;

    // const {data:todos, error, isLoading} = useQuery({
    //     queryKey: ['todos'],
    //     queryFn: () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').then( res => res.data ),
    //     staleTime: 10 * 1000
    // });

    // creating a reusable custom hook useTodos
    const {data:todos, error, isLoading} = useTodos();

    if (isLoading)
        return <h1>Loading</h1>

    if (error)
        return <h1>Error</h1>

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;