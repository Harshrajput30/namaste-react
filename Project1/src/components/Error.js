import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-container">
      <h1>404 - Page Not Found</h1>
      <h2>Sorry, the page you are looking for does not exist.</h2>

      <h3>
        {err?.status} : {err?.statusText}
      </h3>

    </div>
  );
};

export default Error;
