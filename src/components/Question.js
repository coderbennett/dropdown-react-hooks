import Dropdown from './Dropdown';
import React, { useState } from 'react';

export default function Question() {

    const [isResident, setResidency] = useState(false);

    const handleChange = event => {
        setResidency(current => !current);
    }

    return (
      <div className="Question">
        <label for="question">Are you a US resident?</label>
        <input type="checkbox" onChange={handleChange}></input>
        <Dropdown value={isResident}/>
      </div>
    );
  }