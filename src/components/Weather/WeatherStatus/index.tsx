import { Title } from "components/Text/Title";
import WeatherIcon from "components/Weather/WeatherIcon";
import styled from "styled-components";
import { FilteredListItem } from "types/weather";

interface Props {
  weatherStatus: FilteredListItem;
  cityName: string;
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

const WeatherStatus = ({ weatherStatus, cityName }: Props) => {
  const { temperature, precipitation, humidity, wind, description } =
    weatherStatus;
  return (
    <div>
      <Title>{cityName}'s Current Weather:</Title>
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
    </div>
  );
};

export default WeatherStatus;
