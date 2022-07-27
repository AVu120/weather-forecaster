import styles from "./index.module.scss";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: string[];
  label?: string;
  error?: string;
}

const CitySearchBar = ({ value, options, onChange, label, error }: Props) => {
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
          onChange={onChange}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <datalist id="city-search-bar-list">
        {options.map((option) => (
          <option value={option} key={option} />
        ))}
      </datalist>
    </div>
  );
};

export default CitySearchBar;
