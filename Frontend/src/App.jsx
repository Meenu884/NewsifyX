import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CategoryNavbar from "./components/CategoryNavbar";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <CategoryNavbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;