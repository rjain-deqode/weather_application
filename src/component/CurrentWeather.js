import React, { useState, useEffect, useRef } from "react";
import "./WeatherApp.css";
import { Input } from "./Input";
import { Button } from "./Button";
import axios from "axios";
import WeeklyData from "./shared/WeeklyData";
import CurrentData from "./shared/CurrentData";
import Chart from "./shared/Chart";
import moment from "moment";
import GoogleMap from "./shared/GoogleMap";
import EmptyData from "./shared/EmptyData";

function CurrentWeather(props) {
  const [search, setSearch] = useState("");
  const [weeklyWeather, setWeeklyWeather] = useState([]);
  const ref = useRef();

  const [chartAxis, setChartAxis] = useState({
    xAxis: [],
    yAxis: [],
  });

  const [cordinate, setCordinate] = useState({
    aLet: 0,
    aLon: 0,
  });

  const [data, setData] = useState({
    temp: 0,
    minTemperature: [],
    maxTemperature: [],
    humidity: "",
    description: "",
    icon: "",
    display: false,
    pressure: "",
    feelsLike: 0,
    visibility: "",
    wind: 0,
    name: "",
    view: false,
  });

  const [geolocation, setGeolocation] = useState({
    lat: "",
    log: "",
  });

  useEffect(() => {
    if (search === "") {
      navigator.geolocation.getCurrentPosition(function (position) {
        setGeolocation({
          ...geolocation,
          lat: position.coords.latitude,
          log: position.coords.longitude,
        });
      });
    }
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setGeolocation({
          ...geolocation,
          lat: position.coords.latitude,
          log: position.coords.longitude,
        });
      });
    }
  }, [geolocation.lat, geolocation.log]);

  useEffect(() => {
    if (geolocation.lat && geolocation.log) {
      fetchData();
    }
  }, [geolocation.lat, geolocation.log]);

  const fetchWeatherData = async (search) => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=35bd10c223b33cc321caa26ce46f7f0b`,
      });
      console.log("response", response.data);
      setData({
        temp: response.data.main.temp - 273.15,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        display: true,
        pressure: response.data.main.pressure,
        feelsLike: response.data.main.feels_like - 273.15,
        visibility: response.data.visibility,
        wind: response.data.wind.speed,
        name: response.data.name,
        view: true,
      });
      setCordinate({
        ...cordinate,
        aLet: response.data.coord.lat,
        aLon: response.data.coord.lon,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchData = async (search) => {
    const apikey = `https://api.openweathermap.org/data/2.5/onecall?lat=${geolocation.lat}&lon=${geolocation.log}&units=metric&exclude`;
    const response = await fetch(
      `${apikey}=current&appid=3c072250b7b95a5b2c1f101aabc82b3a`
    );
    const dailyForcast = await fetch(
      `${apikey}=hourly,daily&appid=3c072250b7b95a5b2c1f101aabc82b3a`
    );
    const data = await response.json();
    const dailyData = await dailyForcast.json();
    setWeeklyWeather(data.daily);
    setChartAxis({
      ...chartAxis,
      xAxis: data.hourly,
      yAxis: data.hourly,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(search);
    fetchData();
  };

  useEffect(() => {
    ref.current = setSearch;
  }, []);

  const newXAxisData =
    chartAxis.xAxis &&
    chartAxis.xAxis.map((res) => {
      const day = moment.unix(res.dt).utc();
      return moment(day).format("h:mm a");
    });
  const newYAxisData =
    chartAxis.yAxis &&
    chartAxis.yAxis.map((res) => {
      return res.temp;
    });
  return (
    <div>
      <div className="app__header">
        <form className="search__filter" onSubmit={handleSubmit}>
          <div className="input__group">
            <Input
              className="search__filed"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search City"
            ></Input>
            <Button type="submit" className="search__btn" label={"Search"} />
          </div>
        </form>
      </div>
      {data.view ? (
        <>
          <div className="main__container">
            <div className="grid__container">
              <div className="current__container">
                <CurrentData
                  display={data.display}
                  data={data}
                  aLet={cordinate.aLet}
                  aLon={cordinate.aLon}
                />
              </div>
              <div className="map__section">
                <GoogleMap
                  isMarkerShown
                  geolocation={geolocation}
                  data={data}
                  aLet={cordinate.aLet}
                  aLon={cordinate.aLon}
                />
              </div>
            </div>
          </div>
          <div className="inner__container">
            <Chart newXAxisData={newXAxisData} newYAxisData={newYAxisData} />
            <WeeklyData weeklyWeather={weeklyWeather} data={data} />
          </div>
        </>
      ) : (
        <EmptyData
          title="No result found"
          content="Try adjusting your search to find what your looking for."
        />
      )}
    </div>
  );
}
export default CurrentWeather;
