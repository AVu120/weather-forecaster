import WeatherIcon from "components/WeatherIcon";
import { FilteredListItem } from "types/weather";
import styled from "styled-components";

interface Props {
  weatherStatus: FilteredListItem;
}

const CurrentTemperature = styled.span`
  font-size: 48px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: flex-start;
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

const WeatherStatus = ({ weatherStatus }: Props) => {
  const { temperature, precipitation, humidity, wind, description, dateTime } =
    weatherStatus;
  return (
    <Container>
      <WeatherIcon description={description} />
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
