import '../styles/dashboard.css';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Dashboard(){
    return(
        <div>
            <div className="navigation">
                <nav>
                    <h1 className='logo'>Companion</h1>
                    <ul>
                        <li><WidgetsIcon/> Dashboard</li>
                        <li><ChatIcon/> Messages</li>
                        <li><AssignmentIcon/> Verification</li>
                        <li><ReportIcon/> Reports</li>
                        <li><SettingsIcon/> Settings</li>
                    </ul>
                    <ul>
                        <li><LogoutIcon /> Logout</li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <div className="navbar">
                    <h3>Admin</h3>
                </div>
            </div>
        </div>
    )
}