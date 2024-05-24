import AppCard from "@/components/AppCard";
import AppTable from "@/components/AppTable";
import { Box, Button, Typography } from "@mui/material";
import CreateAgencyDialog from "./dialogs/CreateAgencyDialog";
import { useState } from "react";
import { useAgenciesStore } from "./stores/useAgenciesStore";

const AgenciesAdmin = () => {
  const { isAgencyDialogOpen, setAgencyDialogOpen } = useAgenciesStore();
  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <AppCard
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>List of Agencies</Typography>
        <Button
          variant="outlined"
          onClick={() => {
            setAgencyDialogOpen(true);
          }}
        >
          + Create
        </Button>
      </AppCard>

      <AppCard style={{ marginTop: "10px", flexGrow: 1, overflow: "auto" }}>
        <AppTable />
      </AppCard>
      {isAgencyDialogOpen && <CreateAgencyDialog />}
    </Box>
  );
};

export default AgenciesAdmin;
