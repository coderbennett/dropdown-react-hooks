import React, { useContext, useState } from 'react';

export const DropdownContext = React.createContext();

export const useDropdownContext = () => useContext(DropdownContext);

const DropdownProvider = (props) => {
    const [isResident, setResidency] = useState(false);

    return (
        <DropdownContext.Provider value={{isResident: isResident}} />
    );
}

export default DropdownProvider;