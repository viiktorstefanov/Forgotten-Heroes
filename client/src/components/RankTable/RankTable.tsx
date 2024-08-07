import React, { useEffect } from "react";
import styles from "./RankTable.module.css";
import RankTableHead from "../RankTableHead/RankTableHead";
import RankTableRow from "../RankTableRow/RankTableRow";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { getPoints } from "../../state/auth/authThunks";

const RankTable: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPoints());
  }, [dispatch]);
  
  const usersPointsData = useSelector((state: RootState) => state.auth.usersPoints);

  return (
    <div className={styles["rank-table"]}>
      {usersPointsData && usersPointsData?.length > 0 ? <RankTableHead /> : null}
      {usersPointsData?.map((user) => 
        <RankTableRow user={user} key={user._id}/>
      )}
    </div>
  );
};

export default RankTable;
