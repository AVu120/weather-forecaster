import styles from "./index.module.scss";

interface Props {
  value: string;
  onType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: () => void;
  options: string[];
  label?: string;
  error?: string;
  isLoadingWeatherForecast: boolean;
}

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
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor="city-search-bar">
          {label}
        </label>
      )}
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
    </div>
  );
};

export default CitySearchBar;
