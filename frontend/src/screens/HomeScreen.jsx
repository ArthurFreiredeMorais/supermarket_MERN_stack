import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice"; // Import the query hook from the productSlice
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

// Define the HomeScreen component
const HomeScreen = () => {
  // Use the useGetProductsQuery hook to fetch product data
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? ( // Display a loading message while data is loading
        <Loader />
      ) : error ? ( // Display an error message if there is an error
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          {" "}
          {/* Display product data if there are no errors */}
          <h1>Latest Products</h1>
          <Row>
            {products.map(
              (
                product // Map through the products and display them in a grid
              ) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />{" "}
                  {/* Render a Product component for each product */}
                </Col>
              )
            )}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen; // Export the HomeScreen component
