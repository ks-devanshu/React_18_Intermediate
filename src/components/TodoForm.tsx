import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import type { Todo } from '../hooks/useTodos';

interface TodoContext {
    previousData: Todo[];
}

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo, TodoContext>({
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
        // onSuccess: (savedTodo, newTodo) =>
        //     queryClient.setQueryData<Todo[]>(['todos'], todos => [savedTodo, ...(todos || [])]),

        onMutate: (newTodo) => {
            const previousData = queryClient.getQueryData<Todo[]>(['todos']) || [];
            queryClient.setQueryData<Todo[]>(['todos'], todos => [newTodo, ...(todos || [])]);
            return {previousData};
        },
        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<Todo[]>(['todos'], todos => todos?.map( todo => todo === newTodo ? savedTodo : todo));
        },
        onError: (_error, _newTodo, TodoContext) => {
            queryClient.setQueryData<Todo[]>(['todos'], TodoContext?.previousData)
        }
  });

  return (
    <>
    {addTodo.error && <p className='alert alert-danger'>Error</p>}
    {/* {addTodo.isPending && <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
    </div>} */}
    <form className="row m-3" onSubmit={event => {
        event.preventDefault();
        addTodo.mutate({
                id: 0,
                title: ref.current?.value || '',
                completed: false,
                userId: 2
            });
        if (ref.current)
            ref.current.value = '';
        }}>
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
    </>
  );
};

export default TodoForm;