import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';


// disableCloseOnSelect:    will still open after select an option
// clearOnEscape:           will clear the input after pressing escape
// disableClearable:        the input can't be cleared
// includeInputInList:      the highlight will move to the input
// auto autoHighlight:      will highlight the first option
// autoSelect:              the input value will the hover option when lose the focuse
// blurOnSelect:            the selected option will be blur

// FC
// onChange = (event, newValue)=>{}


export default function Playground() {
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };
    const flatProps = {
        options: top100Films.map((option) => option.title),
    };
    const [value, setValue] = React.useState(null);

    return (
        <Stack spacing={1} sx={{ width: 300 }}>
            <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                    <TextField {...params} label="disableCloseOnSelect" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="clear-on-escape"
                clearOnEscape
                renderInput={(params) => (
                    <TextField {...params} label="clearOnEscape" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-clearable"
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label="disableClearable" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="include-input-in-list"
                includeInputInList
                renderInput={(params) => (
                    <TextField {...params} label="includeInputInList" variant="standard" />
                )}
            />
            <Autocomplete
                {...flatProps}
                id="flat-demo"
                renderInput={(params) => (
                    <TextField {...params} label="flat" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="controlled-demo"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => (
                    <TextField {...params} label="controlled" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="auto-complete"
                autoComplete
                includeInputInList
                renderInput={(params) => (
                    <TextField {...params} label="autoComplete" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-list-wrap"
                disableListWrap
                renderInput={(params) => (
                    <TextField {...params} label="disableListWrap" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="open-on-focus"
                openOnFocus
                renderInput={(params) => (
                    <TextField {...params} label="openOnFocus" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="auto-highlight"
                autoHighlight
                renderInput={(params) => (
                    <TextField {...params} label="autoHighlight" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="auto-select"
                autoSelect
                renderInput={(params) => (
                    <TextField {...params} label="autoSelect" variant="outlined" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disabled"
                disabled
                renderInput={(params) => (
                    <TextField {...params} label="disabled" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="disable-portal"
                disablePortal
                renderInput={(params) => (
                    <TextField {...params} label="disablePortal" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="blur-on-select"
                blurOnSelect
                renderInput={(params) => (
                    <TextField {...params} label="blurOnSelect" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="clear-on-blur"
                clearOnBlur
                renderInput={(params) => (
                    <TextField {...params} label="clearOnBlur" variant="standard" />
                )}
            />
            <Autocomplete
                {...defaultProps}
                id="select-on-focus"
                selectOnFocus
                renderInput={(params) => (
                    <TextField {...params} label="selectOnFocus" variant="standard" />
                )}
            />
            <Autocomplete
                {...flatProps}
                id="readOnly"
                readOnly
                defaultValue={flatProps.options[3]}
                renderInput={(params) => (
                    <TextField {...params} label="readOnly" variant="standard" />
                )}
            />
        </Stack>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
];