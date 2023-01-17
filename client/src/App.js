import "./App.css";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";
import Register from "./Components/Register";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import PrivateRoutes from "./Components/PrivateRoutes";
import Alerterrors from "./Components/Alerterrors";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Alerterrors />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
