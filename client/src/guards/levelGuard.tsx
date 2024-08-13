import React from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

type LevelRouteProps = {
  element: React.ReactElement;
}

const LevelRoute: React.FC<LevelRouteProps> = ({ element }) => {
  const { levelNumber } = useParams();
  
  const location = useLocation();

  const levels = useSelector((state: RootState) => state.levels.levels);
  
  const userPoints = useSelector((state: RootState) => state.auth.user?.points);

  const currentLevel = levels?.find(level => level.levelNumber === +levelNumber!);
  const requiredPoints = currentLevel?.requiredPoints;
    
  const haveEnoughPoints = userPoints! >= requiredPoints! ? true : false;

  if(!haveEnoughPoints) {
    alert("Нямаш достатъчно точки");
  }

  return haveEnoughPoints ? element : <Navigate to="/game" state={{ from: location }} />;
};

export default LevelRoute;
