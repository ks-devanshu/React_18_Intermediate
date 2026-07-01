import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Oops... {isRouteErrorResponse(error) ? 'Invalid url/route' : 'Unexpected :)'}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </>
  );
};

export default ErrorPage;