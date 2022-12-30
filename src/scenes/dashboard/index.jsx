import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme"
import Header from "../../components/Header";
import { mockTranscations } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointofSaleIcon from "@mui/icons-material/PointofSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/TrafficOutlined";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatChart from "../../components/StatChart";
import ProgressChart from "../../components/ProgressChart";

const Dashboard =() => {
    return (
    <Box m="20px">
        <Box 
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
    </Box>
    );
};

export default Dashboard;