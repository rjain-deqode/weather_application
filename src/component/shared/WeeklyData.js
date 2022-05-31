import React, { useState } from "react";
import Accordion from "./Accordion";
import "./Accordion.css";
import WeeklyDetailsList from "./WeeklyDetailsList";
import LoadingSpinner from "./LoadingSpinner";

function WeeklyData({ weeklyWeather, data }) {
  const [activeState, setActiveState] = useState("");

  const toggleClass = (e) => {
    e.preventDefault();
    setActiveState(activeState === "" ? "active" : "");
  };

  return (
    <div className="weekly_weather_data">
      <h3>8-day forecast</h3>
      {weeklyWeather ? (
        <div>
          <WeeklyDetailsList
            activeState={activeState}
            weeklyWeather={weeklyWeather}
            toggleClass={toggleClass}
            data={data}
          />
          {activeState && (
            <Accordion
              title={data.description}
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              setActiveState={setActiveState}
              activeState={activeState}
              weeklyWeather={weeklyWeather}
              data={data}
            />
          )}
        </div>
      ) : (
        <div>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}

export default WeeklyData;
