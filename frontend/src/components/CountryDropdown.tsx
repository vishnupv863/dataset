import { countries } from "../constants/countries";
import "../styles/CountryDropdown.css";

interface CountryDropdownProps {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

const CountryDropdown = ({
  selectedCountry,
  onCountryChange,
}: CountryDropdownProps) => {
  return (
    <div className="country-dropdown-container">
      <label
        htmlFor="country-select"
        className="country-dropdown-label"
      >
        Country
      </label>

      <select
        id="country-select"
        className="country-dropdown-select"
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
      >
        <option value="">Select a country</option>

        {Object.keys(countries).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;