// import { useParams, useSearchParams } from "react-router-dom";

import { useParams } from "react-router-dom";

const UserDetailPage = () => {
    // extracts parameters value for url
    const params = useParams();
    // console.log(params);

    // access and update query string parameters, use like state hook
    // const [searchParams, setSearchParams] = useSearchParams();
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.toString());
    // console.log(searchParams.get('name'));
    // url = http://localhost:5173/users/1?name=abc&age=12

  return <p>{`User ${params.id}`}</p>;
};

export default UserDetailPage;