import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Game from "./components/Game/Game";
import Rank from "./components/Rank/Rank";
import Heroes from "./components/Heroes/Heroes";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Rules from "./components/Rules/Rules";
import Category from "./components/Category/Category";
import HeroDetails from "./components/HeroDetails/HeroDetails";
import AuthRoute from "./guards/authGuard";
import PlayGame from "./components/PlayGame/PlayGame";
import LevelRoute from "./guards/levelGuard";

const AppRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route
          path="/game/*"
          element={
            <AuthRoute>
              <Routes>
                <Route path="/" element={<Game />} />
                <Route path="level/:levelNumber" element={<LevelRoute element={<PlayGame />} />} />
              </Routes>
            </AuthRoute>
          }
        />

        <Route path="/heroes" element={<Heroes />} />
        <Route path="/heroes/:heroId" element={<HeroDetails />} />
        <Route path="/heroes/category/*" element={<Category />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AppRoutes;
