import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";

const voltageObj = {
    title: "Volatage",
    totalNumber: 230,
    icon: "ri-police-car-line",
  };
  
  const currentObj = {
    title: "Current",
    totalNumber: 1697,
    icon: "ri-steering-2-line",
  };
  
  const powerObj = {
    title: "Power",
    totalNumber: "85k",
    icon: "ri-user-line",
  };
  
  const distanceObj = {
    title: "Cost Daily",
    totalNumber: 2167,
    icon: "ri-timer-flash-line",
  };

const Dashboard = () => {
   return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={voltageObj} />
          <SingleCard item={currentObj} />
          <SingleCard item={powerObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Energy Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Forecast Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default Dashboard;