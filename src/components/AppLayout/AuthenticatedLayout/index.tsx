import AppSideBar from "@/components/AppSidebar";
import { Box, Paper } from "@mui/material";

interface Props {
    children : React.ReactNode
}
const AuthenticatedLayout = (props: Props) => {

    const {children} = props;

    return(
        <Box
        sx={{
          height: "100vh",
          backgroundColor: "#EEEEEE",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Paper elevation={3}>
          <AppSideBar />
        </Paper>
        <Box>{children}</Box>
      </Box>
    )
}


export default AuthenticatedLayout