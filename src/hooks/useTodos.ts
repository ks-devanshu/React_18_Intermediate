import { keepPreviousData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

interface Query {
    pageSize: number;
}

const useTodos = (query: Query) =>
    useInfiniteQuery<Todo[], Error>( {
        queryKey: ['todos',query],
        queryFn: ({ pageParam=1} ) =>
            axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _start: (pageParam as number - 1) * query.pageSize,
                    _limit: query.pageSize
                }
            }).then(res => res.data)
        ,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        }
    } )

export default useTodos;