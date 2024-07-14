import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import RagAuth from "./Components/RagAuth/RagAuth.jsx";
import UserAuth from "./Components/UserAuth/UserAuth.jsx";
import RagPickerDash from "./Components/RagPickerDashboard/RagPickerDash.jsx";
import UserDashboard from "./Components/UserDashboard/UserDashboard.jsx";
import UserProfile from "./Components/UserProfile/UserProfile.jsx";

function App() {
  return (
    <Router>
      <main className="flex overflow-x-hidden no-scrollbar">
        <div className="App flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register-as-a-rag-picker" element={<RagAuth />} />
            <Route path="/register-as-a-user" element={<UserAuth />} />
            <Route path="/ragPickerCentral" element={<RagPickerDash />} />
            <Route path="/userCentral" element={<UserDashboard />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
