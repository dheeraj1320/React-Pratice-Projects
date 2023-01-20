import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>My home Page.</h1>
      <p>
        Go to <Link to="products">the list of Products</Link>.
      </p>
    </>
  );
};

export default HomePage;
