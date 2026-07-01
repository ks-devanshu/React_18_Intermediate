// import { Link, Navigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

import { Link } from "react-router-dom";

const UserListPage = () => {
  const users = [
    { id: 1, name: 'Mosh' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Alice' },
  ];

  // const { user } = useAuth();
  // if (!user) {
  //   return <Navigate to='/login'/>
  // }

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          {/* <a href="#">{user.name}</a> */}
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;