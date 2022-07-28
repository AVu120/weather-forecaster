import { Title } from "components/Text/Title";
import styled from "styled-components";
import { FilteredWeatherForecast } from "types/weather";

const Table = styled.table`
  border-collapse: collapse;
  & tr:nth-child(even) {
    background-color: grey;
  }
  font-size: 12px;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  text-align: center;
`;

const Th = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const TitleRow = styled.tr`
  font-weight: bold;
`;

interface Props {
  weatherForecast: FilteredWeatherForecast;
  selectedDate: string;
}
const DayForecast = ({ weatherForecast, selectedDate }: Props) => {
  return (
    // This seems to stop causing table horizontal overflow behaviour when converted to styled-component so
    // I'm leaving this as in-line styling for now.
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Title style={{ marginBottom: "1rem" }}>Selected Day Forecast: </Title>
      <Table>
        <TitleRow>
          <Th>Date Time</Th>
          <Th>Description</Th>
          <Th>Temperature</Th>
          <Th>Precipitation</Th>
          <Th>Humidity</Th>
          <Th>Wind</Th>
        </TitleRow>
        {weatherForecast.list
          .filter(({ dateTime }) => dateTime.startsWith(selectedDate))
          .map(
            ({
              dateTime,
              description,
              humidity,
              precipitation,
              temperature,
              wind,
            }) => (
              <tr key={dateTime}>
                <Td>{dateTime}</Td>
                <Td>{description}</Td>
                <Td>{temperature}</Td>
                <Td>{precipitation}</Td>
                <Td>{humidity}</Td>
                <Td>{wind}</Td>
              </tr>
            )
          )}
      </Table>
    </div>
  );
};

export default DayForecast;
