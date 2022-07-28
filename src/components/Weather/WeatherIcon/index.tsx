import CloudyIcon from "./Cloudy";
import RainyIcon from "./Rainy";
import SunnyIcon from "./Sunny";

const WeatherIcon = ({ description }: { description: string }) => {
  if (description.includes("clear")) return <SunnyIcon />;
  if (description.includes("rain")) return <RainyIcon />;
  return <CloudyIcon />;
};

export default WeatherIcon;
