import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details......</h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        back
      </Link>
    </>
  );
};

export default ProductDetail;
