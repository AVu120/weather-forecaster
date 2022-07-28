import { FilteredWeatherForecast } from "types/weather";
import styled from "styled-components";
import { DAYS_OF_WEEK } from "utils/constants";
import { getMostCommonElement } from "utils";
import WeatherIcon from "components/Weather/WeatherIcon";
import { Title } from "components/Text/Title";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  justify-content: space-around;
`;
const DayContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ isSelected }) =>
    isSelected &&
    `border: 1px solid white;
     border-radius: 5px;
     padding: 5px;
     font-weight: bold;`}
  cursor: pointer;
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

const DayTitle = styled.div`
  text-align: center;
  font-size: 16px;
`;

interface Props {
  weatherForecast: FilteredWeatherForecast;
  onSelectDay: (date: string) => void;
  selectedDate: string;
}
const FiveDayForecast = ({
  weatherForecast,
  onSelectDay,
  selectedDate,
}: Props) => {
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
      date,
      dayOfWeek: DAYS_OF_WEEK[new Date(date).getUTCDay()],
      condition: getMostCommonElement(fiveDayForecast[date].description),
      minimumTemperature: Math.min(...fiveDayForecast[date].temperature),
      maximumTemperature: Math.max(...fiveDayForecast[date].temperature),
    };
  });

  return (
    <>
      <Title>5 Day Forecast: </Title>
      <Container>
        {fiveDayForecastSummary.map(
          ({
            dayOfWeek,
            condition,
            minimumTemperature,
            maximumTemperature,
            date,
          }) => (
            <DayContainer
              onClick={() => onSelectDay(date.slice(0, 10))}
              isSelected={date.startsWith(selectedDate)}
              key={`${date}-weather-summary`}
              data-testid="day-weather-summary"
            >
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
    </>
  );
};

export default FiveDayForecast;
