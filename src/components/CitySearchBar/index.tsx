import styled from "styled-components";

interface Props {
  value: string;
  onType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: () => void;
  options: string[];
  label?: string;
  error?: string;
  isLoadingWeatherForecast: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  column-gap: 1rem;
`;

const Label = styled.label`
  margin-right: 5px;
  font-size: 1rem;
`;

const ErrorMessageContainer = styled.div`
  position: relative;
`;
const ErrorMessage = styled.p`
  color: red;
  margin: 0;
  position: absolute;
  font-size: 1rem;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button<{ disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: none;
  padding: 5px;
  background-color: #319795;
  color: white;
  font-weight: bold;
  border-radius: 0.5rem;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
const CitySearchBar = ({
  value,
  options,
  onType,
  onSelect,
  label,
  error,
  isLoadingWeatherForecast,
}: Props) => {
  return (
    <Container>
      {label && <Label htmlFor="city-search-bar">{label}</Label>}
      <InputContainer>
        <input
          list="city-search-bar-list"
          name="city-search-bar"
          id="city-search-bar"
          value={value}
          onChange={onType}
        />
        {error && (
          <ErrorMessageContainer>
            <ErrorMessage>{error}</ErrorMessage>
          </ErrorMessageContainer>
        )}
      </InputContainer>
      <datalist id="city-search-bar-list">
        {options.map((option) => (
          <option value={option} key={option} />
        ))}
      </datalist>
      <Button onClick={onSelect} disabled={!value || isLoadingWeatherForecast}>
        Get Forecast
      </Button>
    </Container>
  );
};

export default CitySearchBar;
