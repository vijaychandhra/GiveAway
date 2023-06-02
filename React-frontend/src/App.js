import logo from "./logo.svg";
import "./App.css";
import "../src/styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./NewComponents/Screens/Main";
import Footer from "./NewComponents/Screens/Footer";
import Test from "./NewComponents/Testing/Test";
import Description from "./NewComponents/Screens/Description";
import Singup from "./NewComponents/Screens/Singup";
import Login from "./NewComponents/Screens/Login";
import Cart from "./NewComponents/Screens/Cart";
import Shipping from "./NewComponents/Screens/Shipping";
import Checkout from "./NewComponents/Screens/Checkout";
import Payment from "./NewComponents/Screens/Payment";
import Profile from "./NewComponents/Screens/Profile";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import NewHeader from "./NewComponents/Screens/NewHeader";
import Newdes from "./NewComponents/Screens/Newdes";
import Admin from "./NewComponents/Screens/Admin";
import Order from "./NewComponents/Screens/Order";
import WriteReview from "./NewComponents/Screens/WriteReview";
import Home from "./NewComponents/Screens/Home";
import User from "./NewComponents/Screens/User";
const App = () => {
  return (
    <BrowserRouter>
      <NewHeader />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/des" element={<Description />}></Route>
            <Route exact path="/newdes" element={<Newdes />}></Route>
            <Route exact path="/write" element={<WriteReview />}></Route>
            {/* <Route exact path="/home" element={<Home />}></Route> */}
            <Route exact path="/user" element={<User />}></Route>

            <Route exact path="/test" element={<Test />}></Route>
            <Route exact path="/signup" element={<Singup />}></Route>
            <Route exact path="/signin" element={<Login />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/shipping" element={<Shipping />}></Route>
            <Route exact path="/checkout" element={<Checkout />}></Route>
            <Route exact path="/payment" element={<Payment />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/order" element={<Order />}></Route>
            <Route exact path="/adminpage" element={<Admin />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
