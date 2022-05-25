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
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Myorders from "./Pages/Dashboard/Myorders";
import Addreview from "./Pages/Dashboard/Addreview";
import Myprofile from "./Pages/Dashboard/Myprofile";
import Notfound from "./Pages/Notfound/Notfound";
import Blog from "./Pages/Blog/Blog";

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
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
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
          <Route path="myrofile" element={<Myprofile></Myprofile>}></Route>
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
