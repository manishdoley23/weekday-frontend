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
    console.log("jobDetailsFromCompany:", jobDetailsFromCompany);

    return (
        <div>
            <Card
                sx={{
                    borderRadius: 3,
                    maxWidth: 345,
                    paddingX: 0.5,
                    paddingY: 0.8,
                }}
            >
                <div
                    style={{
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: "6px",
                        paddingRight: "6px",
                        paddingTop: "4px",
                        paddingBottom: "4px",
                    }}
                >
                    <Typography
                        fontSize={10}
                        variant="body2"
                        color="text.secondary"
                    >
                        ⏳ Posted 10 days ago
                    </Typography>
                </div>
                <CardHeader
                    avatar={<Avatar src={logoUrl}>R</Avatar>}
                    // action={
                    //     <IconButton aria-label="settings">
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={companyName}
                    subheader={jobRole}
                />
                <CardContent
                    style={{
                        position: "relative",
                        maxHeight: "500px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        {jobDetailsFromCompany}
                    </Typography>
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            height: "350px",
                            backgroundImage:
                                "linear-gradient(to top, white, transparent)",
                        }}
                    />
                    <Button
                        variant="text"
                        color="primary"
                        style={{
                            position: "absolute",
                            bottom: 0,
                        }}
                    >
                        View Job
                    </Button>
                </CardContent>
                {/* <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering,
                            add saffron and set aside for 10 minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a
                            large, deep skillet over medium-high heat. Add
                            chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes.
                            Transfer shrimp to a large plate and set aside,
                            leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt
                            and pepper, and cook, stirring often until thickened
                            and fragrant, about 10 minutes. Add saffron broth
                            and remaining 4 1/2 cups chicken broth; bring to a
                            boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top
                            with artichokes and peppers, and cook without
                            stirring, until most of the liquid is absorbed, 15
                            to 18 minutes. Reduce heat to medium-low, add
                            reserved shrimp and mussels, tucking them down into
                            the rice, and cook again without stirring, until
                            mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don&apos;t
                            open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10
                            minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse> */}
            </Card>
        </div>
    );
};

export default ViewJobItem;
