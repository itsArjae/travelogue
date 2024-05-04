import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}
const UnAuthenticatedLayout = (props: Props) => {
  const { children } = props;

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#EEEEEE" }}>
        {children}</Box>
  );
};

export default UnAuthenticatedLayout;
