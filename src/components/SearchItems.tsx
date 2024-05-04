import { TextField } from "@mui/material";

const SearchItems = ({ label }: { label: string }) => {
    return (
        <TextField
            sx={{
                "& .MuiFormLabel-root": {
                    fontSize: "0.8rem",
                },
            }}
            label={label}
            placeholder={label}
            variant="outlined"
        />
    );
};

export default SearchItems;
