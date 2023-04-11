import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/signing.css';
import image from '../assets/Login-amico.png';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function Signing() {

    const navigate = useNavigate();

        Axios.get('http://localhost:3001/read')
            .then((response) => {
                if(response.data[0]==null){
                    // alert("Invalid Access")
                }else{
                    navigate("/Dashboard")
                }
            })
   
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='bg-img'>
            <div className='container'>
                <div className="image">
                    <img src={image} alt="signing" />
                </div>
                <div className="signing-form">
                    <div>
                        <h1>Sign In</h1>
                        <small>to acces the Admin dashboard</small>
                    </div>
                    <form>
                        <TextField id="standard-basic" type='text' size='small' fullWidth='true' label="Username" variant="standard" />
                        <br />
                        <FormControl id="standard-basic" type='password' size='small' fullWidth='true' margin='normal' label="Username" variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <br />
                        <Link to="/Dashboard">
                            <Button id='btn' size='small' fullWidth='true' variant="contained" >Sign In</Button>
                        </Link>
                    </form>
                    <small>Designed & Developed By Group 77</small>
                </div>
            </div>
        </div>
    )
}