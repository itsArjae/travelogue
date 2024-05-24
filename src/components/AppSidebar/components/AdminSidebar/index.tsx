import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { AdminSidebarData } from "./AdminSidebarData";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";

const AdminSidebar = () => {
  const router = useRouter();

  const handleRouting = (url: string) => {
    router.push(url);
  }

  return (
    <Box sx={{ padding: "10px", width: { sm: "70px", md: "250px" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Image src={"/logo.png"} height={40} width={40} alt="logo" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "5px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              display: { xs: "none", md: "block" },
              fontSize: "12px",
            }}
          >
            Arjae Carlo M. Iporong
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              display: { xs: "none", md: "block" },
              fontWeight: "bold",
            }}
          >
            Admin
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ margin: "5px 2px", marginBottom: "20px" }} />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {AdminSidebarData.map((navData, index) => (
          <Button
            key={index}
            sx={{
              display: "flex",
              color: "black",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              height: "50px",
              textTransform: "none",
              backgroundColor: router.pathname == navData.url ? "#C8C6C6" : "",
            }}
            onClick={()=>{handleRouting(navData.url)}}
          >
            {navData.icon}
            <Typography
              sx={{
                fontWeight: "bold",
                display: { xs: "none", md: "block" },
                fontSize: "15px",
                marginLeft: "10px",
              }}
            >
              {navData.name}
            </Typography>
          </Button>
        ))}

        <Divider sx={{ margin: "5px 2px", marginTop: "50px" }} />
        <Button
          sx={{
            display: "flex",
            marginTop: "auto",
            color: "black",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            height: "50px",
            textTransform: "none",
          }}
        >
          <LogoutIcon />
          <Typography
            sx={{
              fontWeight: "bold",
              display: { xs: "none", md: "block" },
              fontSize: "15px",
              marginLeft: "10px",
              color: "red",
            }}
          >
            Logout
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default AdminSidebar;
