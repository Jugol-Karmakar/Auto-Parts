import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import SignIn from "./Pages/Login/SignIn/SignIn";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Parts from "./Pages/Home/Parts/Parts";
import Purchase from "./Pages/Home/Purchase/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Myorders from "./Pages/Dashboard/Myorders";
import Addreview from "./Pages/Dashboard/Addreview";
import Notfound from "./Pages/Notfound/Notfound";
import Blog from "./Pages/Blog/Blog";
import Users from "./Pages/Dashboard/Users";
import Myprofile from "./Pages/Dashboard/Myprofile";
import Payment from "./Pages/Dashboard/Payment";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/parts" element={<Parts></Parts>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Myorders></Myorders>}></Route>
          <Route path="addreview" element={<Addreview></Addreview>}></Route>
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="manageorders"
            element={<ManageAllOrder></ManageAllOrder>}
          ></Route>
          <Route
            path="manageproduct"
            element={<ManageProduct></ManageProduct>}
          ></Route>

          <Route path="myprofile" element={<Myprofile></Myprofile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
        </Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
