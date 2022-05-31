import React, { useState } from "react";
import moment from "moment";
import ChavronIcon from "./ChavronIcon";

function WeeklyDetailsList({ activeState, weeklyWeather, toggleClass, data }) {
  console.log("activeState======", activeState);
  return (
    <div>
      <ul className={`day__list ${activeState}`}>
        {weeklyWeather
          ? weeklyWeather.map((value, i) => {
              const day = moment.unix(value.dt).utc();
              if (i <= 8) {
                return (
                  <li key={i} className={`grid-item`} onClick={toggleClass}>
                    <div
                      className="day_content"
                    >
                      <span className="gutter__right">
                        {moment(day).format("ddd")},
                      </span>
                      <span>{moment(day).format("MMMM Do, h:mm a")}</span>
                    </div>
                    <div className="day__list__values">
                      <img
                        className="owm_weather_icon"
                        src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`}
                        alt="weather-icon"
                        width="200"
                        height="200"
                      />
                      {value.temp.max}/{value.temp.min}℃
                      <div className="weather__content">
                        <button
                          className={`weather_description ${activeState}`}
                        >
                          {data.description}{" "}
                          <ChavronIcon className="" width={10} fill={"#777"} />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              }
            })
          : null}
      </ul>
    </div>
  );
}

export default WeeklyDetailsList;
