import request from './Request';
import LevelComponent from '../components/Level/Level';
import LevelDone from '../components/LevelDone/LevelDone';
import LockedLevel from '../components/LockedLevel/LockedLevel';

const endpoints = {
    levels: '/levels',
};

export type Level = {
    levelNumber: number,
    requiredPoints: number,
    winPoints: number,
    score: number,
    _id: string,
};

const getUserLevels = async (userId: string) => await request.get(endpoints.levels + '/' + userId, null);

const renderFirstLevel = (level: Level) => {
    if (level.score >= level.winPoints) {
      return (
        <LevelDone
          level={level}
          key={level._id}
        />
      );
    } else {
      return (
        <LevelComponent
          level={level}
          key={level._id}
        />
      );
    }
};

  const renderOtherLevels = (level: Level, userPoints: number) => {
    if (level.requiredPoints <= userPoints) {
      if (level.requiredPoints < userPoints) {
        return (
          <LevelDone
           level={level}
            key={level._id}
          />
        );
      } else {
        return (
          <LevelComponent
            level={level}
            key={level._id}
          />
        );
      }
    } else {
      return (
        <LockedLevel
          label={level.levelNumber}
          requiredPoints={level.requiredPoints}
          winPoints={level.winPoints}
          key={level._id}
        />
      );
    }
};

export {
    getUserLevels,
    renderFirstLevel,
    renderOtherLevels
}