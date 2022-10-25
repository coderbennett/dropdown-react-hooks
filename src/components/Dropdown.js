import states from '../assets/states';

export default function Dropdown(prop) {
    
    return (
      <div className="Dropdown">
        {prop.value === true ? (
          <>
            <label for="state">What state do you reside in?</label>
            <select name="state" id="state">
              {states.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
          </>
        ) : (<>false news</>)}
      </div>
    );
  }