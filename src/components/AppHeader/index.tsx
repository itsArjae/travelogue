import { Typography } from "@mui/material";
import AppCard from "../AppCard";

interface Props {
    title : string
}

const AppHeader = (props: Props) => {
    return(
        <AppCard>
            <Typography sx={{fontWeight:"bold"}}  >{props?.title}</Typography>
        </AppCard>
    )
}

export default AppHeader;