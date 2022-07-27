interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: string[];
  label?: string;
}

const CitySearchBar = ({ value, options, onChange, label }: Props) => {
  return (
    <>
      {label && <label htmlFor="city-search-bar">{label}</label>}
      <input
        list="city-search-bar-list"
        name="city-search-bar"
        id="city-search-bar"
        value={value}
        onChange={onChange}
      />
      <datalist id="city-search-bar-list">
        {options.map((optionValue) => (
          <option value={optionValue} />
        ))}
      </datalist>
    </>
  );
};

export default CitySearchBar;
