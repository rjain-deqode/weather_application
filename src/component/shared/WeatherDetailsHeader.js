import React from "react";
import moment from "moment";
import ChavronIcon from "./ChavronIcon";

function WeatherDetailsHeader(props) {
  const {
    activeState,
    activeDate,
    setActiveState,
    setRotateState,
    setDailyWeatherDetails,
    setActiveDate,
    setRotate,
    weeklyWeather,
  } = props;

  const toggleAccordion = () => {
    setActiveState(activeState === "active" ? "" : "active");
    setRotateState(
      activeState === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };

  const detailsHandler = (e) => {
    console.log("event==", e);
    setDailyWeatherDetails({
      weatherIcon: e.weather[0].icon,
      daliyMinTemp: e.temp.min,
      daliyMaxTemp: e.temp.max,
      dailyDescription: e.weather[0].description,
      clouds: e.clouds,
      wind_speed: e.wind_speed,
      pressure: e.pressure,
      humidity: e.humidity,
      uvi: e.uvi,
      dew_point: e.dew_point,
      feelsLikeDay: e.feels_like.day,
      feelsLikeNight: e.feels_like.night,
      feelsLikeEve: e.feels_like.eve,
      feelsLikeMorn: e.feels_like.morn,
      sunrise: moment(e.sunrise).format("h:mm a"),
      sunset: moment(e.sunset).format("h:mm a"),
    });
    setActiveDate(e.dt);
  };

  return (
    <div className={`accordion`}>
      <ul className="days_inner_list">
        {weeklyWeather
          ? weeklyWeather.map((value, i) => {
              const day = moment.unix(value.dt).utc();
              if (i <= 8) {
                console.log("value.dt=====", day);
                return (
                  <>
                    <li
                      className={`day_content ${
                        value.dt === activeDate ? "active" : ""
                      }`}
                      onClick={() =>
                        value.dt === activeDate
                          ? toggleAccordion()
                          : detailsHandler(value)
                      }
                    >
                      <span className="gutter__right">
                        {moment(day).format("ddd")},
                      </span>
                      <span>{moment(day).format("MMMM Do")}</span>
                    </li>
                  </>
                );
              }
            })
          : null}
      </ul>
      <div onClick={toggleAccordion}>
        <ChavronIcon
          className={`${setRotate}`}
          width={15}
          height={15}
          fill={"#48484A"}
        />
      </div>
    </div>
  );
}

export default WeatherDetailsHeader;
