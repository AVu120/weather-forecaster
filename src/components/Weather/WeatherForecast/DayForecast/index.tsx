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

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
  const dayForecast = weatherForecast.list.filter(({ dateTime }) =>
    dateTime.startsWith(selectedDate)
  );
  return (
    // This seems to stop causing table horizontal overflow behaviour when converted to styled-component so
    // I'm leaving this as in-line styling for now.
    <>
      <Title>Selected Day Forecast:</Title>
      <TableContainer>
        <Table>
          <thead>
            <TitleRow>
              <Th>Date Time</Th>
              <Th>Description</Th>
              <Th>Temperature</Th>
              <Th>Precipitation</Th>
              <Th>Humidity</Th>
              <Th>Wind</Th>
            </TitleRow>
          </thead>
          <tbody>
            {dayForecast.map(
              ({
                dateTime,
                description,
                humidity,
                precipitation,
                temperature,
                wind,
              }) => (
                <tr key={`${dateTime}-day-forecast`}>
                  <Td>{dateTime}</Td>
                  <Td>{description}</Td>
                  <Td>{temperature}</Td>
                  <Td>{precipitation}</Td>
                  <Td>{humidity}</Td>
                  <Td>{wind}</Td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DayForecast;
