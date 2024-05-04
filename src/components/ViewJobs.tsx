import { useEffect, useState } from "react";
import ViewJobItem, { JobItem } from "./ViewJobItem";
import { Box, Grid } from "@mui/material";

const ViewJobs = () => {
    const [data, setData] = useState<JobItem[]>([]);

    useEffect(() => {
        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                limit: 10,
                offset: 0,
            }),
        })
            .then((response) => response.text())
            .then((result) => {
                console.log(JSON.parse(result));
                setData(JSON.parse(result).jdList);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <Box
            sx={{
                marginTop: 10,
            }}
        >
            <Grid container spacing={5} justifyContent={"center"}>
                {data.map((val) => {
                    return (
                        <Grid item>
                            <ViewJobItem key={val.jdUid} {...val} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default ViewJobs;
