import { useRouteError } from "react-router-dom";

import PageContent from "./../components/PageContent";

function ErrorPage() {
  const error = useRouteError();

  return (
    <PageContent title="An error occurred!">
      <p>Something went wrong!</p>
    </PageContent>
  );
}

export default ErrorPage;
