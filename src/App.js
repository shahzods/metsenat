import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import HomiylarPage from "./pages/HomiylarPage/HomiylarPage";
import TalabalarPage from "./pages/TalabalarPage/TalabalarPage";
import SinglePage from "./pages/SinglePage/SinglePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/homiylarpage" element={<HomiylarPage />} />
        <Route path="/talabalarpage" element={<TalabalarPage />} />
        <Route path="/singlepage" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
