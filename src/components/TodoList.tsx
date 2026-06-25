// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import { useState } from 'react';
import useTodos from '../hooks/useTodos';
import React from 'react';

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

    const pageSize = 10;
    // creating a reusable custom hook useTodos
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage} = useTodos({pageSize});

    if (isLoading)
        return <h1>Loading</h1>

    if (error)
        return <h1>Error</h1>

  return (
    <>
    <ul className="list-group">
      {data?.pages.map( (page, index) => <React.Fragment key={index}>
        {page.map( (todo) => <li key={todo.id} className="list-group-item">
          {todo.title}
        </li> )}
      </React.Fragment> )}
    </ul>
    <button className="btn btn-primary m-2" onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading...' : 'Load More'}</button>
    </>
  );
};

export default TodoList;