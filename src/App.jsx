import React from "react";
import { Route, Routes } from "react-router-dom";

// RootLayout
import RootLayout from "./Components/RootLayout";
import InstagramLogin from "./Pages/Login";
import CreateAccount from "./Pages/Register";

// MainLayout
import MainLayout from "./Components/Newsfeed/MainLayout";
import Newsfeed from "./Pages/Newsfeed";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<InstagramLogin />} />
          <Route path="/register" element={<CreateAccount />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/newsfeed" element={<Newsfeed />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
