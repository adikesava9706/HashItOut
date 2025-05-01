import HomePage from "../pages/HomePage/HomePage";
import ViewMembers from "../pages/ViewMembers/ViewMembers";
import AddMembers from "../pages/AddMembers/AddMembers";
import MemberDetails from "../pages/MemberDetails/MemberDetails";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/members" element={<ViewMembers />} />
        <Route path="/add" element={<AddMembers />} />
        <Route path="/members/:id" element={<MemberDetails />} />
      </Routes>
    </div>
  );
}

export default App;
