import Dropdown from './Dropdown';
import React, { useState } from 'react';
import DropdownProvider, { DropdownContext, useDropdownContext } from '../utils/DropdownContext';

export default function Question() {

  const [isResident, setResidency] = useState(false);

    const handleChange = event => {
        setResidency(current => !current);
    }

    return (
      <DropdownContext.Provider value={isResident}>
        <div className="question">
          <div className="residencyCheckbox">
            <label for="question">Are you a US resident?</label>
            <input id="question" type="checkbox" onChange={handleChange}></input>
          </div>
          <Dropdown/>
        </div>
      </DropdownContext.Provider>
    );
  }