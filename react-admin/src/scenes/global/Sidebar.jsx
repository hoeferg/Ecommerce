import { useState } from "react";
import { Prosidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeModeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MaplineOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem 
        active={selected === title} 
        style={{ 
            color: colors.grey[100]}} 
            onClick={()=> setSelected(title)} 
            icon={icon}>
        <Typography>{title}</Typography>
        <link to={to} />
        </MenuItem>
    )
}


const Sidebar =() => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard')

    return (
        <Box
        sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper": {
                background: 'transparent !important'
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important"
            },
            "& .pro-menu-item.active": {
                color: "#6870fa"
            },
            }}
            >
        <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
                <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                    margin: "10px 0 20px 0",
                    color: colors.grey[100]
                }}
                >
                    {!isCollapsed && ( 
                        <Box
                        display ="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        ml="15px"
                        >
                            <Topography variant="h3" color={colors.grey[100]}>
                                ADMINTS
                            </Topography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                            </Box>
                    )}
                </MenuItem>

                {!isCollapsed && (
                    <Box mb="25px">
                        <Box display ="flex" justifyContent='center' alignItems="center">
                            <img
                            alt="profile-user"
                            width="100px"
                            height="100px"
                            src={`../../assets/user.png`}
                            style={{cursor: "pointer", borderRadius:"50%"}}
                            />
                        </Box>

                        <Box textAlign="center">
                            <Typography variant="h2" color={colors.gray[100]} fontWeigth="bold" sx={{ m: "10px 0 0 0"}}>Ed Roh</Typography>
                            <Typography varient="h5" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
                        </Box>
                    </Box>
                )}
                {/* MENU ITEMS */}
                <Box padding={isCollapsed ? undefined : "10%"}>
                    <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeModeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Manage Team"
                        to="/team"
                        icon={<PeopleOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Contacts Information"
                        to="/contacts"
                        icon={<ContactsOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Invoices Balances"
                        to="/invoices"
                        icon={<ReceiptOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeModeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeModeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    
                </Box>
            </Menu>
        </ProSidebar>
        </Box>
    );
}

export default Sidebar;