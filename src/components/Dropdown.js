import states from '../assets/states';
import countries from '../assets/countries';

export default function Dropdown(prop) {
    
    return (
      <div className="dropdown">
        {prop.value === true ? (
          <>
            <label for="state">What state do you reside in?</label>
            <select name="state" id="state">
              {states.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
          </>
        ) : (
          <>
            <label for="country">What country do you reside in?</label>
            <select name="country" id="country">
              {countries.map((country) => (
                <option value={country}>{country}</option>
              ))}
            </select>
          </>
        )}
      </div>
    );
  }