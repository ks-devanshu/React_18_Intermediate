import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').then( res => res.data ),
        staleTime: 10 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: 3,
        gcTime: 300_000, // 5 min
    });
}

export default useTodos;