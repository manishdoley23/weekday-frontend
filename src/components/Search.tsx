import { Box } from "@mui/material";
import SearchDropDown from "./SearchDropDown";
import SearchItems from "./SearchItems";

const Search = () => {
    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <SearchDropDown width={150} label="Roles" />
            <SearchDropDown width={250} label="Number of Employees" />
            <SearchDropDown width={150} label="Experience" />
            <SearchDropDown width={120} label="Remote" />
            <SearchDropDown width={250} label="Minimum Base Pay Salary" />
            <SearchItems label="Search Company Name" />
        </Box>
    );
};

export default Search;
