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

  const backgrounds = ["/bg11.png", "/bg22.png", "/bg33.png", "/bg99.png"];

  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [backgroundStyle, setBackgroundStyle] = useState({
    background: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url("${backgrounds[
      backgroundIndex
    ]}")`,
    backgroundSize: "cover"
  });

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
        {/* <button onClick={changeBackground}>Change Background</button> */}

        {/* // */}
        <button onClick={changeBackground} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700" />
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease" />
          <span className="relative text-white">Button Text</span>
        </button>

        {/* // */}

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
