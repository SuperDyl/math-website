import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addition from "./pages/Addition";
import Division from "./pages/Division";
import Subtraction from "./pages/Subtraction";
import Multiplication from "./pages/Multiplication";
import NoPage from "./pages/NoPage"
import HomePage from "./pages/HomePage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="Addition" element={<Addition />} />
        <Route path="Subtraction" element={<Subtraction />} />
        <Route path="Multiplication" element={<Multiplication />} />
        <Route path="Division" element={<Division />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
