import { TextField, Autocomplete, MenuItem } from "@mui/material";
import { CheckIcon } from "lucide-react";
// import CheckIcon from "@mui/icons-material/Check";
const names = [
    "Humaira Sims",
    "Santiago Solis",
    "Dawid Floyd",
    "Mateo Barlow",
    "Samia Navarro",
    "Kaden Fields",
    "Genevieve Watkins",
    "Mariah Hickman",
    "Rocco Richardson",
    "Harris Glenn",
];
const SearchDropDown = ({ width, label }: { width: number; label: string }) => {
    return (
        <Autocomplete
            sx={{
                m: 1,
                minWidth: width,
                fontSize: "0.8rem",
                "& .MuiFormLabel-root": {
                    fontSize: "0.8rem",
                },
            }}
            multiple
            options={names}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label={label}
                    placeholder={label}
                />
            )}
            renderOption={(props, option, { selected }) => (
                <MenuItem
                    {...props}
                    key={option}
                    value={option}
                    sx={{ justifyContent: "space-between" }}
                >
                    {option}
                    {selected ? <CheckIcon color="info" /> : null}
                </MenuItem>
            )}
        />
    );
};

export default SearchDropDown;
