import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";

import Sidebar from "./components/Sidebar";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser, loading } = useAuthContext();
  console.log("Authenticated user:", authUser);

  // Define an array of background image URLs
  const backgrounds = [
    "/bg11.png",
    "/bg22.png",
    "/bg33.png",
    "/bg99.png"
  ];

  // State variables to manage the background style and current background index
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [backgroundStyle, setBackgroundStyle] = useState({
    background: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url("${backgrounds[
      backgroundIndex
    ]}")`,
    backgroundSize: "cover"
  });

  // Function to handle background change
  const changeBackground = () => {
    const nextIndex = (backgroundIndex + 1) % backgrounds.length;
    setBackgroundIndex(nextIndex);
    setBackgroundStyle({
      background: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url("${backgrounds[
        nextIndex
      ]}")`,
      backgroundSize: "cover"
    });
  };

  if (loading) return null;

  return (
    <div className="flex" style={backgroundStyle}>
      <Sidebar />
      <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <button onClick={changeBackground}>Change Background</button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/explore"
            element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/likes"
            element={authUser ? <LikesPage /> : <Navigate to={"/login"} />}
          />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;

/*
main.css

body {
	background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url("/bg22.png");
	 background-repeat: no-repeat; 
	background-size: cover;
	 background-position: center; 
	 background-attachment: fixed; 
}
*/
