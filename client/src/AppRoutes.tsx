import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Game from "./components/Game/Game";
import Rank from "./components/Rank/Rank";
import Heroes from "./components/Heroes/Heroes";

const AppRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AppRoutes;
