import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import SignIn from "./Pages/Login/SignIn/SignIn";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/purchase" element={<Purchase></Purchase>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
