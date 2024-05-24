import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CloudIcon from '@mui/icons-material/Cloud';
export const AdminSidebarData = [
    {
        name: "Dashboard",
        url: "/Admin/Dashboard",
        icon: <DashboardIcon />
    },
    {
        name: "Islands",
        url: "/Admin/Islands",
        icon: <ManageHistoryIcon />
    },
    {
        name: "Agencies",
        url: "/Admin/Agencies",
        icon: <SupportAgentIcon />
    },
    {
        name: "Packages",
        url: "/Admin/Packages",
        icon: <Inventory2Icon />
    },
    {
        name: "Weather",
        url: "/Admin/Weather",
        icon: <CloudIcon />
    },
]