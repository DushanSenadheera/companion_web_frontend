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

export default function Verification() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                                    <MenuItem onClick={handleClose}>Download</MenuItem>
                                    <MenuItem onClick={handleClose}>Reject</MenuItem>
                                    <MenuItem onClick={handleClose}>Accept</MenuItem>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, officiis. Debitis aperiam nesciunt velit excepturi impedit ex laudantium soluta, et suscipit, voluptates architecto maxime voluptas neque modi commodi quasi asperiores!
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}