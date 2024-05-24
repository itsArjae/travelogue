import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("../../modules/Admin/WeatherAdmin"),
  {
    loading: () => <div>Loading...</div>,
    ssr: false, 
  }
);

const AdminWeather = () => {
  return <DynamicComponent />
};

export default AdminWeather;
