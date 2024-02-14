import { Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  console.log(products, "18");

  useEffect(() => {
    if (products) {
      dispatch(listProducts());
    } else {
      setMsg("No Data");
    }
  }, [dispatch]);

  return (
    <>
      <Heading as="h2" mb="8" fontSize="3xl">
        Latest Products
      </Heading>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
          gap="8"
        >
          {products ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <div>{msg}</div>
          )}
        </Grid>
      )}
    </>
  );
};

export default HomeScreen;
