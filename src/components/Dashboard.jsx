import '../styles/dashboard.css';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {

const adminSession = sessionStorage.getItem('adminAccess');
if (adminSession === null) {
    window.location.href = "/";
}

    return (
        <div id='content' >
            <div className="nav-links">
                <h2 className='logo' >Companion</h2>
                <ul>
                    <li><WidgetsOutlinedIcon className='icon' /> <Link to="/dashboard">Dashboard</Link></li>
                    <br />
                    <li><SmsOutlinedIcon className='icon' /> <Link to="/dashboard/message">Messages</Link></li>
                    <li><TopicOutlinedIcon className='icon' /> <Link to="/dashboard/verification">Verification</Link></li>
                    <li><ReportOutlinedIcon className='icon' /> <Link to="/dashboard/report">Reports</Link></li>
                    <li><SettingsOutlinedIcon className='icon' /> <Link to="/dashboard/settings">Settings</Link></li>
                    <br />
                    <li onClick={()=>{sessionStorage.removeItem('adminAccess')}} ><LogoutIcon className='icon' /> <Link to="/">Logout</Link></li>
                </ul>
            </div>
            <div className="content">
                <div className="navigation">
                    {/* <input type="search" placeholder='search' id='search'/> */}
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            size='small'
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search...' }}
                        />
                        <IconButton type="button" sx={{ p: '6px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    <span>Admin <Badge badgeContent={4} color="error" className='icon' ><NotificationsIcon /></Badge></span>
                </div>
                <div className="nav-content">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}