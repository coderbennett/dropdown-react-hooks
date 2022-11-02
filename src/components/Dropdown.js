import states from '../assets/states';
import countries from '../assets/countries';
import { useState, createContext, useContext } from 'react';
import { DropdownContext } from '../utils/DropdownContext';

export default function Dropdown() {

  const isResident = useContext(DropdownContext);
    
    return (
      <div className="dropdown">
        {isResident === true ? (
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