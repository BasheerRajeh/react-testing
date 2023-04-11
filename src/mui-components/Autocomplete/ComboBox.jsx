import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
    return (
        <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: "50%" }}
            renderInput={(params) => (
                <TextField {...params} label="Movie" placeholder="Select a movie..." />
            )}
        />
        // <Autocomplete
        //   disablePortal // This can be useful in cases where you need to prevent the dropdown menu from being positioned outside of a certain container element.
        //   id="combo-box-demo"
        //   options={top100Films}
        //   sx={{ width: 300 }}
        //   renderInput={(params) => <TextField {...params} label="Movie" />}
        // />
    );
}

/**
By default, the component accepts the following options structures:

interface AutocompleteOption {
    label: string;
}

or
type AutocompleteOption = string;
const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
];
// or
const options = ['The Godfather', 'Pulp Fiction'];
*/

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
];
