import { FilteredWeatherForecast } from "types/weather";
import styled from "styled-components";
import { DAYS_OF_WEEK } from "utils/constants";
import { getMostCommonElement } from "utils";
import WeatherIcon from "components/WeatherIcon";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  justify-content: space-around;
`;
const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MaxMinTemperatures = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  column-gap: 5px;
`;

const MinimumTemperature = styled.span`
  color: #bcc0c4;
`;

const MaximumTemperature = styled.span``;

const DayTitle = styled.div`
  text-align: center;
`;

const WeatherForecast = ({
  weatherForecast,
}: {
  weatherForecast: FilteredWeatherForecast;
}) => {
  const fiveDayForecast: any = {};

  weatherForecast.list.forEach((listItem) => {
    const date = listItem.dateTime.slice(0, 10);
    if (!fiveDayForecast[date]) {
      fiveDayForecast[date] = {
        description: [listItem.description],
        temperature: [listItem.temperature],
      };
    } else {
      fiveDayForecast[date].description.push(listItem.description);
      fiveDayForecast[date].temperature.push(listItem.temperature);
    }
  });

  const fiveDayForecastSummary = Object.keys(fiveDayForecast).map((date) => {
    return {
      dayOfWeek: DAYS_OF_WEEK[new Date(date).getUTCDay()],
      condition: getMostCommonElement(fiveDayForecast[date].description),
      minimumTemperature: Math.min(...fiveDayForecast[date].temperature),
      maximumTemperature: Math.max(...fiveDayForecast[date].temperature),
    };
  });

  return (
    <Container>
      {fiveDayForecastSummary.map(
        ({ dayOfWeek, condition, minimumTemperature, maximumTemperature }) => (
          <DayContainer>
            <DayTitle>{dayOfWeek}</DayTitle>
            {condition && (
              <div style={{ textAlign: "center" }}>
                <WeatherIcon description={condition} />
              </div>
            )}
            <MaxMinTemperatures>
              <span>{maximumTemperature}°</span>
              <MinimumTemperature>{minimumTemperature}°</MinimumTemperature>
            </MaxMinTemperatures>
          </DayContainer>
        )
      )}
    </Container>
  );
};

export default WeatherForecast;
