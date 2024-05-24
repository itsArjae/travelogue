import AppCard from "@/components/AppCard";
import { Box, Divider, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const WeatherAdmin = () => {
  const [weatherData, setWeatherData] = useState<any>();

  const GetData = () => {
    axios
      .get(
        "https://api.weatherapi.com/v1/forecast.json?q=camarines%20norte&days=5&key=3c0ce3de73874c778ca143711241705"
      )
      .then((response: any) => {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code outside of the range of 2xx
          console.error("Error Response:", error.response.data);
          console.error("Status Code:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No Response:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error:", error.message);
        }
      });
  };

  const convertDate = (epoch: number) => {
    // Given Unix timestamp
    const timestamp = epoch;

    // Convert the timestamp to milliseconds
    const date = new Date(timestamp * 1000);

    // Get the day of the week
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];

    return dayOfWeek;
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <AppCard>
        <Typography sx={{ fontWeight: "bold" }}>CAMARINES NORTE</Typography>
      </AppCard>
      <AppCard
        style={{ marginTop: "10px", flexGrow: 1, backgroundColor: "#0E0F20" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box>
            
            {weatherData && (
              <Image
                alt="image"
                height={200}
                width={200}
                src={`https:${weatherData?.current.condition.icon}`}
              />
            )}

            <Typography
              sx={{ fontWeight: "bold", color: "white", fontSize: "25px" }}
            >
              {" "}
              {weatherData?.current?.condition.text}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
            >
              Wind: {weatherData?.current.wind_mph} mph
            </Typography>
            <Typography
              sx={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
            >
              Precip: {weatherData?.current.precip_mm} in
            </Typography>
            <Typography
              sx={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
            >
              Pressure: {weatherData?.current.pressure_in} in
            </Typography>
            <Typography
              sx={{ color: "white", fontWeight: "bold", fontSize: "50px" }}
            >
              {" "}
              {weatherData?.current.temp_f} °f
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ border: ".1px solid white", margin: "20px" }} />
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          {weatherData &&
            weatherData?.forecast.forecastday.map(
              (data: any, index: number) => (
                <Box key={index}>
                  <Typography sx={{ color: "white", textAlign: "center" }}>
                    {convertDate(data.date_epoch)}
                  </Typography>
                  <Image
                    alt="image"
                    height={200}
                    width={200}
                    src={`https:${data.day.condition.icon}`}
                  />
                  <Typography sx={{ color: "white", textAlign: "center" }}>
                    {data.day.condition.text}
                  </Typography>
                  
                </Box>
              )
            )}
        </Box>
      </AppCard>
    </Box>
  );
};

export default WeatherAdmin;
