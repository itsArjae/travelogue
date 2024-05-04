import { Card } from "@mui/material";

interface Props {
  children: React.ReactNode;
  elevation?: number;
}
const AppCard = (props: Props) => {
  const { children, elevation } = props;
  return (
    <Card sx={{ padding: "10px" }} elevation={elevation ? elevation : 3}>
      {children}
    </Card>
  );
};

export default AppCard;
