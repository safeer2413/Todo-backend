import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import AdminNavigator from "./components/AdminComponents/AdminNavigator";


function App() {

  const { userInfo } = useSelector((state) => state.auth);

  if (userInfo && userInfo.isAdmin) return <AdminNavigator />;
  return (
    <>
      <NavBar />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

    </>
  )
}

export default App
