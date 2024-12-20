import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
