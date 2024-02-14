import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import UserEditScreen from "./screens/UserEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Flex
        as="main"
        direction="column"
        mt="72px"
        minH="xl"
        py="6"
        px="6"
        backgroundColor="gray.200"
      >
        <Routes>
          <Route path="/" wxact element={<HomeScreen />} />
          <Route path="/product/:id" exact element={<ProductScreen />} />
          <Route path="/cart/:id" exact element={<CartScreen />} />
          <Route path="/cart" exact element={<CartScreen />} />
          <Route path="/login" exact element={<LoginScreen />} />
          <Route path="/register" exact element={<RegisterScreen />} />
          <Route path="/profile" exact element={<ProfileScreen />} />
          <Route path="/shipping" exact element={<ShippingScreen />} />
          <Route path="/payment" exact element={<PaymentScreen />} />
          <Route path="/placeorder" exact element={<PlaceOrderScreen />} />
          <Route path="/order/:id" exact element={<OrderScreen />} />
          <Route path="/admin/userlist" exact element={<UserListScreen />} />
          <Route
            path="/admin/user/:id/edit"
            exact
            element={<UserEditScreen />}
          />
          <Route
            path="/admin/productlist"
            exact
            element={<ProductListScreen />}
          />
          <Route
            path="/admin/product/:id/edit"
            exact
            element={<ProductEditScreen />}
          />
          <Route path="/admin/orderlist" exact element={<OrderListScreen />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
