import { Box } from "@mui/material";

interface Props {
    children : React.ReactNode
}
const AuthenticatedLayout = (props: Props) => {

    const {children} = props;

    return(
        <Box>{children}</Box>
    )
}


export default AuthenticatedLayout