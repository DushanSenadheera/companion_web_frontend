import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import image from '../assets/unity.jpg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import '../styles/verification.css';
import file from '../assets/Arunalu fund raising event.pdf';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Verification() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const [snackopen, setOpen] = React.useState(false);
  
    const snackhandleClick = () => {
      setOpen(true);
    };
  
    const snackhandleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    }

    return (
        <div className='verifysection'>
            <h3>Verification</h3>
            <div className="verifyContent">
                <Card sx={{ maxWidth: 1000 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                JD
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                />
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem><a target='blank' href={file}>Download</a></MenuItem>
                                    <MenuItem onClick={handleClose}>Reject</MenuItem>
                                    <MenuItem onClick={snackhandleClick}>Accept</MenuItem>
                                </Menu>
                            </IconButton>
                        }
                        title="Jhon Doe"
                        subheader="April 10, 2023"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={image}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Sansadaya Medical Fundraising Event: 

We invite you to join us for a heartfelt evening of compassion and support at our Medical Fundraising Event. Together, we can make a difference in the lives of individuals facing medical challenges and provide them with the care and assistance they need. Save the date and be part of this impactful event.

Date: 2023.05.20
Time: 9.00
Location: cancer hospital maharagama

Description:
The  Medical Fundraising Event is dedicated to raising funds to support individuals and families in need of medical assistance. By attending this event, you'll be playing a crucial role in helping us provide vital medical resources, treatments, and support to those facing health challenges.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <Snackbar open={snackopen} autoHideDuration={6000} onClose={snackhandleClose}>
        <Alert onClose={snackhandleClose} severity="success" sx={{ width: '100%' }}>
          Fundraise event accepted successfully!
        </Alert>
      </Snackbar>
        </div>
    )
}