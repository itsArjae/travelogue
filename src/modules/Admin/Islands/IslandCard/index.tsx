import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MapIcon from "@mui/icons-material/Map";

const IslandCard = () => {
  return (
    <Box
      sx={{
        border: "1px solid grey",
        width: "220px",
        height: "300px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image height={120} width={220} src="/island-1.jpg" alt="arjae" />
      <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>
        Calaguas Island
      </Typography>
      <Typography sx={{ fontSize: "10px", color: "grey", textAlign: "center" }}>
        This group of islands includes Tinaga Island, Guintinua Island, and
        Maculabo Island.
      </Typography>

      <Box sx={{ marginTop: "auto" }}>
        <IconButton>
          <MapIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default IslandCard;
