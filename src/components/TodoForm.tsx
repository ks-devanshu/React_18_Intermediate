import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import type { Todo } from '../hooks/useTodos';

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo:Todo) => 
        axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then(res => res.data),

        // Invalidating the cache, doesn't work for jsonplaceholder as it is a fake api
        // onSuccess: (savedTodo, newTodo) => {
        //     queryClient.invalidateQueries({
        //         queryKey: ['todos']
        //     });
        // }

        // Updating cache directly
        onSuccess: (savedTodo, newTodo) =>
            queryClient.setQueryData<Todo[]>(['todos'], todos => [savedTodo, ...(todos || [])])
  });

  return (
    <form className="row m-3" onSubmit={event => {
        event.preventDefault();
        addTodo.mutate({
                id: 0,
                title: ref.current?.value || '',
                completed: false,
                userId: 2
            })
        }}>
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;