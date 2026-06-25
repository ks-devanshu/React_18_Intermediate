// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import usePosts from '../hooks/usePosts';

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

const PostList = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => setPosts(res.data))
//       .catch((error) => setError(error));
//   }, []);

    // const {data:posts, error} = useQuery<Post[], Error>({
    //     queryKey: ['posts'],
    //     queryFn: () => axios.get('https://jsonplaceholder.typicode.com/posts').then( res => res.data ),
    //     staleTime: 10 * 1000
    // });

    // using custom hook usePosts
    const {data:posts, error, isLoading} = usePosts();

    if (isLoading) return <h1>Loading</h1>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;