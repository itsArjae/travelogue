import AppCard from "@/components/AppCard";
import { Box, Button, Typography } from "@mui/material";
import IslandCard from "./IslandCard";


const IslandsPage = () => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <AppCard
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>List of Islands</Typography>
        <Button variant="outlined">+ Create</Button>
      </AppCard>
      <AppCard
        style={{
          marginTop: "10px",
          padding: "10px",
          Height: "100%",
          overflowY: "auto", // Enable vertical scrolling when content overflows
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          flexWrap: "wrap", // Allow items to wrap to the next row
        }}
      >
        <IslandCard />
        <IslandCard />
        <IslandCard />
      </AppCard>
    </Box>
  );
};

export default IslandsPage;
