import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Admin from "./Admin/Auth/Dashboard/Admin";
import Dashboard from "./Admin/Auth/Dashboard/Dashboard";
import Navbar from "./Admin/Auth/Dashboard/Navbar";
import Addpost from "./Admin/Auth/Dashboard/Addpost";
function App() {
  return (
    <BrowserRouter>
      <div className="">

<Navbar />
        <Routes>
              <Route path="/" element={<h1>Welcome To Post App</h1>} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Addpost" element={<Addpost />} />


            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
