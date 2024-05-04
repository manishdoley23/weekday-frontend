import SearchDropDown from "./SearchDropDown";
import SearchItems from "./SearchItems";

const Search = () => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <SearchDropDown label="Roles" />
            <SearchDropDown label="Number of Employees" />
            <SearchDropDown label="Experience" />
            <SearchDropDown label="Remote" />
            <SearchDropDown label="Minimum Base Pay Salary" />
            <SearchItems label="Search Company Name" />
        </div>
    );
};

export default Search;
