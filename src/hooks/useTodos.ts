import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

interface query {
    page: number,
    pageSize: number;
}

const useTodos = (query: query) => {
    return useQuery({
        queryKey: ['todos',query],
        queryFn: () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
            params: {
                _start: (query.page - 1) * query.pageSize,
                _limit: query.pageSize
            }
        })
        .then( res => res.data ),
        staleTime: 10 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: 3,
        gcTime: 300_000, // 5 min
        placeholderData: keepPreviousData,
    });
}

export default useTodos;