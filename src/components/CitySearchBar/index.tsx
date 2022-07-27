import styles from "./index.module.scss";
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
`;

const Label = styled.label`
  margin-right: 5px;
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
      <div className={styles.inputContainer}>
        <input
          list="city-search-bar-list"
          name="city-search-bar"
          id="city-search-bar"
          value={value}
          onChange={onType}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <datalist id="city-search-bar-list">
        {options.map((option) => (
          <option value={option} key={option} />
        ))}
      </datalist>
      <button
        type="button"
        onClick={onSelect}
        disabled={!value || isLoadingWeatherForecast}
      >
        Get Forecast
      </button>
    </Container>
  );
};

export default CitySearchBar;
