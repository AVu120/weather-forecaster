import { FilteredWeatherForecast } from "types/weather";
import styled from "styled-components";
import SunnyIcon from "components/WeatherIcons/Clear";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MaxMinTemperatures = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DayTitle = styled.div`
  text-align: center;
`;

const WeatherForecast = ({
  weatherForecast,
}: {
  weatherForecast: FilteredWeatherForecast;
}) => {
  let fiveDayForecast: any = {};

  // weatherForecast.list.forEach((listItem) => {
  //   fiveDayForec
  // })

  return (
    <Container>
      <DayContainer>
        <DayTitle>Thu</DayTitle>
        <SunnyIcon />
        <MaxMinTemperatures>
          <span>17</span>
          <span>18</span>
        </MaxMinTemperatures>
      </DayContainer>
      <DayContainer>
        <DayTitle>Thu</DayTitle>
        <SunnyIcon />
        <MaxMinTemperatures>
          <span>17</span>
          <span>18</span>
        </MaxMinTemperatures>
      </DayContainer>
      <DayContainer>
        <DayTitle>Thu</DayTitle>
        <SunnyIcon />
        <MaxMinTemperatures>
          <span>17</span>
          <span>18</span>
        </MaxMinTemperatures>
      </DayContainer>
      <DayContainer>
        <DayTitle>Thu</DayTitle>
        <SunnyIcon />
        <MaxMinTemperatures>
          <span>17</span>
          <span>18</span>
        </MaxMinTemperatures>
      </DayContainer>
      <DayContainer>
        <DayTitle>Thu</DayTitle>
        <SunnyIcon />
        <MaxMinTemperatures>
          <span>17</span>
          <span>18</span>
        </MaxMinTemperatures>
      </DayContainer>
    </Container>
  );
};

export default WeatherForecast;
