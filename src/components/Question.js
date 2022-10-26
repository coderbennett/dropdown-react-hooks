import Dropdown from './Dropdown';
import React, { useState } from 'react';

export default function Question() {

    const [isResident, setResidency] = useState(false);

    const handleChange = event => {
        setResidency(current => !current);
    }

    return (
      <div className="question">
        <div className="residencyCheckbox">
          <label for="question">Are you a US resident?</label>
          <input id="question" type="checkbox" onChange={handleChange}></input>
        </div>
        <Dropdown value={isResident}/>
      </div>
    );
  }