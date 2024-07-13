import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Components/AuthenticationPage/Authentication";
import UserProfile from "./Components/UserProfile/UserProfile";
import LandingPage from "./Components/LandingPage/LandingPage";
import RagPickerDash from "./Components/RagPickerDashboard/RagPickerDash";
import UserDashboard from "./Components/UserDashboard/UserDashboard";

function App() {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState();
  const [daysAvailable, setDaysAvailable] = useState([]);
  const [timeAvailable, setTimeAvailable] = useState([]);
  const [userLocation, setUserLocation] = useState("");

  return (
    <Router>
      <main className="flex overflow-x-hidden no-scrollbar">
        <div className="App flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/authentication"
              element={
                <Authentication
                  userName={userName}
                  setUserName={setUserName}
                  userPhone={userPhone}
                  setUserPhone={setUserPhone}
                  daysAvailable={daysAvailable}
                  setDaysAvailable={setDaysAvailable}
                  timeAvailable={timeAvailable}
                  setTimeAvailable={setTimeAvailable}
                  userLocation={userLocation}
                  setUserLocation={setUserLocation}
                />
              }
            />
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
