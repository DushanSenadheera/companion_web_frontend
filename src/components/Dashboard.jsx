import '../styles/dashboard.css';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextField from '@mui/material/TextField';

export default function Dashboard(){
    return(
        <div id='content' >
            <div className="nav-links">
                <h3 className='logo' >Companion</h3>
                <ul>
                    <li><WidgetsIcon /> Dashboard</li>
                    <br />
                    <li><MailIcon /> Messages</li>
                    <li><AssignmentIcon /> Verification</li>
                    <li><ReportIcon /> Reports</li>
                    <br />
                    <li><LogoutIcon /> Logout</li>
                </ul>
            </div>
            <div className="content">
                <div className="navigation">
                    <TextField id="standard-basic" type='text' size='small' label="Search" variant="outlined" />
                    <span>Admin <Badge badgeContent={4} color="error"><NotificationsIcon /></Badge></span>
                </div>
                <div className="nav-content">

                </div>
            </div>
        </div>
    )
}