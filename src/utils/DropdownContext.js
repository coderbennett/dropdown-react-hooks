import React, { useState } from 'react';

export const DropdownContext = React.createContext();

const DropdownProvider = (props) => {
    const [isResident, setResidency] = useState(false);

    return (
        <DropdownContext.Provider value={{isResident: isResident}} {...props} />
    );
}

export default DropdownProvider;