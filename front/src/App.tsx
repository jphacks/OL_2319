import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Top, SignUp, Login, Select, Channel } from "./pages";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/select" element={<Select />} />
          <Route path="/channel/:chennelId" element={<Channel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
