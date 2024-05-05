import { Avatar, Box, Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export interface JobItem {
    companyName: string;
    jdLink: string;
    jdUid: string;
    jobDetailsFromCompany: string;
    jobRole: string;
    location: string;
    logoUrl: string;
    maxExp: number;
    maxJdSalary: number;
    minExp: number;
    minJdSalary: number | null;
    salaryCurrencyCode: string;
}

const ViewJobItem = ({
    companyName,
    jdLink,
    jdUid,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    maxExp,
    maxJdSalary,
    minExp,
    minJdSalary,
    salaryCurrencyCode,
}: JobItem) => {
    const salaryCode = salaryCurrencyCode === "USD" ? "$" : "₹";

    return (
        <Card
            sx={{
                borderRadius: 3,
                maxWidth: 345,
                paddingX: 1,
                paddingY: 2,
                transition: "0.3s",
                "&:hover": {
                    transform: "scale(1.01)",
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                },
            }}
        >
            <Box
                sx={{
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "space-between",
                    paddingLeft: "6px",
                    paddingRight: "6px",
                    paddingTop: "10px",
                    paddingBottom: "4px",
                    boxShadow: "1px 2px 2px rgba(0, 0, 0, 0.25)",
                    marginLeft: "10px",
                    width: "fit-content",
                    overflow: "hidden",
                }}
            >
                <Typography
                    fontSize={10}
                    variant="body2"
                    color="text.secondary"
                >
                    ⏳ Posted 10 days ago
                </Typography>
            </Box>
            <Box
                sx={{
                    position: "relative",
                }}
            >
                <CardHeader
                    avatar={<Avatar src={logoUrl} />}
                    title={companyName}
                    subheader={jobRole}
                />
                <Typography
                    variant="overline"
                    fontSize={11}
                    sx={{
                        textTransform: "capitalize",
                        marginLeft: 9,
                        position: "absolute",
                        bottom: -10,
                    }}
                >
                    {location}
                </Typography>
            </Box>
            <CardContent
                sx={{
                    position: "relative",
                    maxHeight: "500px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "350px",
                        backgroundImage:
                            "linear-gradient(to top, white, transparent)",
                        zIndex: 1,
                    },
                }}
            >
                <Typography
                    variant="caption"
                    fontFamily={"monospace"}
                    color="GrayText"
                >
                    Estimated Salary: {salaryCode}
                    {minJdSalary ?? "TBD"} - {maxJdSalary} LPA ✅
                </Typography>
                <Typography marginTop={1} fontSize={15} textAlign={"left"}>
                    About Company:
                </Typography>
                <Typography textAlign={"left"} variant="body2" fontWeight={600}>
                    About us:
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                        hyphens: "auto",
                    }}
                >
                    {jobDetailsFromCompany}
                </Typography>
                {/* <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            border: "1px solid red",
                            height: "350px",
                            width: "100%",
                            boxSizing: "border-box",
                            backgroundImage:
                                "linear-gradient(to top, white, transparent)",
                        }}
                    /> */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                    }}
                >
                    <Button
                        variant="text"
                        color="primary"
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            textTransform: "capitalize",
                        }}
                    >
                        View Job
                    </Button>
                </Box>
            </CardContent>
            <Box
                sx={{
                    paddingX: 2,
                    paddingTop: 2,
                }}
            >
                <Typography
                    variant="caption"
                    color="GrayText"
                    fontFamily={"monospace"}
                >
                    Minimum Experience
                </Typography>
                <Typography color={"GrayText"} variant="body2">
                    {minExp ?? 0} years
                </Typography>
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                        background: "rgb(85, 239, 196)",
                        color: "black",
                        textTransform: "capitalize",
                        paddingY: 1,
                        marginTop: 2,
                    }}
                >
                    ⚡️ Easy Apply
                </Button>
            </Box>
        </Card>
    );
};

export default ViewJobItem;
