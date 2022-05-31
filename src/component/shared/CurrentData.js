import React from "react";
import moment from "moment";

function CurrentData({ data }) {
  return (
    <div>
      {data.display ? (
        <>
          <h4 className="text__orange">
            {moment().format("dddd")} {moment().format("MMMM Do h:mma")}
          </h4>
          <h2 className="location__title">{data.name}</h2>
          <div className="current__temp">
            <img
              className="owm_weather_icon"
              src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
              alt="weather-icon"
              width="200"
              height="200"
            />
            <h2 className="temp">{Math.floor(data.temp)}℃</h2>
          </div>
          <p className="para__des">
            <span className="gutter__right">
              Feel Like {Math.floor(data.feelsLike)}℃
            </span>{" "}
            {data.description} Moderate breeze
          </p>
          <ul className="weather__items">
            <li>{data.wind}m/s WNW</li>
            <li>{data.pressure}hPa</li>
            <li>Humidity: {data.humidity}%</li>
            <li>Visibility: {data.visibility / 1000}.km</li>
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default CurrentData;
