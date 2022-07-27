import SunnyIcon from "components/WeatherIcons/Clear";
import CloudyIcon from "components/WeatherIcons/Cloudy";
import RainyIcon from "components/WeatherIcons/Rainy";
import { FilteredListItem } from "types/weather";
import styled from "styled-components";

interface Props {
  weatherForecast: FilteredListItem;
}

const CurrentTemperature = styled.span`
  font-size: 48px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const CelsiusIcon = styled.span`
  font-size: 16px;
  position: relative;
  top: -12px;
  left: -10px;
`;

const Conditions = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const Icon = ({ description }: { description: string }) => {
  if (description.includes("clear")) return <SunnyIcon />;
  if (description.includes("rain")) return <RainyIcon />;
  return <CloudyIcon />;
};
const WeatherStatus = ({ weatherForecast }: Props) => {
  const { temperature, precipitation, humidity, wind, description, dateTime } =
    weatherForecast;
  return (
    <Container>
      <Icon description={description} />
      <CurrentTemperature>{temperature}</CurrentTemperature>
      <CelsiusIcon>°C</CelsiusIcon>
      <Conditions>
        <div>Precipitation: {precipitation}%</div>
        <div>Humidity: {humidity}%</div>
        <div>Wind: {wind}%</div>
      </Conditions>
    </Container>
  );
};

export default WeatherStatus;
