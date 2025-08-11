import "./App.css";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Update from "./Update";
import Profile from "./Profile";
import Verified from "./Verified";
import ActivateSniper from "./ActivateSniper";
import Sniperbot from "./Sniperbot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/update" element={<Update />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/ActivateSniper" element={<ActivateSniper />} />
        <Route path="/bot" element={<Sniperbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
