import { Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from "../slices/productsApiSlice"; // Import the query hook from the productSlice
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from '../components/Paginate';

// Define the HomeScreen component
const HomeScreen = () => {
  // Use the useGetProductsQuery hook to fetch product data
  const { pageNumber } = useParams();

  console.log(pageNumber);

  const { data, isLoading, error } = useGetProductsQuery({
    pageNumber,
  });

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
          {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} />
        </>
      )}
    </>
  );
};

export default HomeScreen; // Export the HomeScreen component
