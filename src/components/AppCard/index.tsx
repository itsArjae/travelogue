import { Card } from "@mui/material";

interface Props {
  children: React.ReactNode;
  elevation?: number;
  style?: object
}
const AppCard = (props: Props) => {
  const { children, elevation, style } = props;
  return (
    <Card sx={{ padding: "10px", ...style }} elevation={elevation ? elevation : 3}>
      {children}
    </Card>
  );
};

export default AppCard;
