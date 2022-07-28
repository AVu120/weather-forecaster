import SunnyIcon from "./Sunny";
import RainyIcon from "./Rainy";
import CloudyIcon from "./Cloudy";

const WeatherIcon = ({ description }: { description: string }) => {
  if (description.includes("clear")) return <SunnyIcon />;
  if (description.includes("rain")) return <RainyIcon />;
  return <CloudyIcon />;
};

export default WeatherIcon;
