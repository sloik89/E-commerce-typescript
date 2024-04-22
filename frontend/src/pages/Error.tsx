import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(isRouteErrorResponse(error));
  console.log(error);
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className="h-[100vh]  grid place-content-center">
        <div className=" border-white text-center flex flex-col gap-y-9 items-center justify-center">
          <p className="text-9xl text-primary font-bold">404</p>
          <h1 className="text-6xl text-white font-bold">Page not found</h1>
          <p className="text-lg">
            Sorry, we could not find the page you are looking for
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/">Go back home</Link>
          </Button>
        </div>
      </main>
    );
  }
  return (
    <main className="h-[100vh]  grid place-content-center">
      <h1 className="text-6xl font-bold">Error</h1>
    </main>
  );
};

export default Error;
