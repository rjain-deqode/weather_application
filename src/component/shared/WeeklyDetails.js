import React from "react";

function WeeklyDetails(props) {
  const { dailyWeatherDetails } = props;

  return (
    <div>
      <div className="scrolling_container_content">
        {dailyWeatherDetails.weatherIcon ? (
          <>
            <div className="top__section">
              <img
                className="owm_weather_icon"
                src={`http://openweathermap.org/img/wn/${dailyWeatherDetails.weatherIcon}@2x.png`}
                alt="weather-icon"
                width="200"
                height="200"
              />
              <div className="inner_content">
                <p>{dailyWeatherDetails.dailyDescription}</p>
                <p>
                  The high will be{" "}
                  {Math.floor(dailyWeatherDetails.daliyMaxTemp)}
                  ℃, the low will be{" "}
                  {Math.floor(dailyWeatherDetails.daliyMinTemp)}℃.
                </p>
              </div>
            </div>

            <ul className="weather__items">
              <li>{dailyWeatherDetails.clouds}%</li>
              <li>{dailyWeatherDetails.wind_speed} m/s WNW</li>
              <li>{dailyWeatherDetails.pressure}hPa</li>
              <li>Humidity: {dailyWeatherDetails.humidity}%</li>
              <li>UV: {dailyWeatherDetails.uvi}</li>
              <li>Dew point: {dailyWeatherDetails.dew_point}</li>
            </ul>
            <table className="table__content">
              <tr>
                <th></th>
                <th>Morning</th>
                <th>Afternoon</th>
                <th>Evening</th>
                <th>Night</th>
              </tr>
              <tr>
                <td>TEMPERATURE</td>
                <td>{Math.floor(dailyWeatherDetails.feelsLikeMorn)}℃</td>
                <td>{Math.floor(dailyWeatherDetails.feelsLikeDay)}℃</td>
                <td>{Math.floor(dailyWeatherDetails.feelsLikeEve)}℃</td>
                <td>{Math.floor(dailyWeatherDetails.feelsLikeNight)}℃</td>
              </tr>
              <tr>
                <td>FEELS LIKE</td>
                <td>{Math.floor(dailyWeatherDetails.feelsLikeMorn)}℃</td>
                <td>{Math.floor(dailyWeatherDetails.feelsLikeDay)}℃</td>
                <td>{Math.floor(dailyWeatherDetails.feelsLikeEve)}℃</td>
                <td>{Math.floor(dailyWeatherDetails.feelsLikeNight)}℃</td>
              </tr>
            </table>
            <div className="item_container">
              <div className="item">
                <span className="label">Sunrise</span>
                <span className="value">{dailyWeatherDetails.sunrise}</span>
              </div>
              <div className="item">
                <span className="label">Sunset</span>
                <span className="value">{dailyWeatherDetails.sunset}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="message">Select above date</div>
        )}
      </div>
    </div>
  );
}

export default WeeklyDetails;
