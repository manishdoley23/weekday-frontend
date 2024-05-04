import Search from "./components/Search";
import ViewJobs from "./components/ViewJobs";

function App() {
    return (
        <div
            style={{
                paddingTop: "30px",
                padding: "20px",
            }}
        >
            <Search />
            <ViewJobs />
        </div>
    );
}

export default App;
