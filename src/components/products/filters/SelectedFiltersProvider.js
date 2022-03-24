import React, {useState} from "react";

const SelectedFiltersContext = React.createContext([{}, () => {}]);

// TODO не нужон, пока оставить
const SelectedFiltersProvider = (props) => {
    const [selectedFiltersValues, setSelectedFiltersValues] = useState({});

    return (
        <SelectedFiltersContext.Provider value={[selectedFiltersValues, setSelectedFiltersValues]}>
            {props.children}
        </SelectedFiltersContext.Provider>
    );
};

export {SelectedFiltersProvider, SelectedFiltersContext};
