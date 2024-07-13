import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Components/AuthenticationPage/Authentication";
import UserProfile from "./Components/UserProfile/UserProfile";
import LandingPage from "./Components/LandingPage/LandingPage";
import RagPickerDash from "./Components/RagPickerDashboard/RagPickerDash";
import UserDashboard from "./Components/UserDashboard/UserDashboard";

function App() {
  return (
    <Router>
      <main className="flex overflow-x-hidden no-scrollbar">
        <div className="App flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/authentication" element={<Authentication />} />

            <Route path="/ragPickerCentral" element={<RagPickerDash />} />
            <Route path="/userCentral" element={<UserDashboard />} />

            <Route path="/profile" element={<UserProfile />} />
            <Route path="/profile/:name" element={<UserProfile />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
