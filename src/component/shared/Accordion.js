import React, { useState, useRef } from "react";
import "./Accordion.css";
import "./Accordion.css";
import WeatherDetailsHeader from "./WeatherDetailsHeader";
import WeeklyDetails from "./WeeklyDetails";

function Accordion(props) {
  // console.log("days data=====", props.weeklyWeather);
  const [setRotate, setRotateState] = useState("accordion__icon");
  const { activeState, setActiveState } = props;

  const [dailyWeatherDetails, setDailyWeatherDetails] = useState({
    weatherIcon: "",
    daliyMinTemp: [],
    daliyMaxTemp: [],
    dailyDescription: "",
    clouds: "",
    wind_speed: "",
    pressure: "",
    humidity: "",
    uvi: "",
    dew_point: "",
    feelsLikeDay: "",
    feelsLikeNight: "",
    feelsLikeEve: "",
    feelsLikeMorn: "",
    sunrise: "",
    sunset: "",
  });

  const [activeDate, setActiveDate] = useState("");

  const content = useRef(null);

  console.log("activeDate=====", activeDate);

  return (
    <div className="accordion__section">
      <div className="grid-item">
        <WeatherDetailsHeader
          activeState={activeState}
          activeDate={activeDate}
          setActiveState={setActiveState}
          setRotateState={setRotateState}
          setDailyWeatherDetails={setDailyWeatherDetails}
          setActiveDate={setActiveDate}
          setRotate={setRotate}
          weeklyWeather={props.weeklyWeather}
        />
        <WeeklyDetails dailyWeatherDetails={dailyWeatherDetails} />
      </div>
    </div>
  );
}

export default Accordion;
