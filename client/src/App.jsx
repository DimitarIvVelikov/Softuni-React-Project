import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Catalog from "./components/catalog/Catalog";
import AuthContextProvider from "./context/AuthContext";
import Create from "./components/create/Create";
import Details from "./components/details/Details";
import Edit from "./components/edit/Edit";
import PrivateRouteAuthenticate from "./utils/PrivateRouteAuthenticate";
import PrivateRouteNotAuthenticate from "./utils/PrivateRouteNotAuthenticated";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route element={<PrivateRouteNotAuthenticate />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/program/:id" element={<Details />} />
          <Route element={<PrivateRouteAuthenticate />}>
            <Route path="/program/:id/edit" element={<Edit />} />
            <Route path="/create" element={<Create />} />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
