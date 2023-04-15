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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

export default function Signing() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const checkAccess = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/checkAdminAccess', {
             username,
             password
        }).then((response) => {
            console.log(response.data);
            if (response.data === "success") {
                navigate("/dashboard")
            } else {
                alert("Invalid Access")
            }
        })
    }
    
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
                    <form onSubmit={checkAccess} >
                        <TextField id="standard-basic" type='text' size='small' fullWidth='true' label="Username" variant="standard" onChange={
                            (e) => {
                                setUsername(e.target.value);
                            }
                        } />
                        <br />
                        <FormControl id="standard-basic" type='password' size='small' fullWidth='true' margin='normal' label="Username" variant="standard" onChange={
                            (e) => {
                                setPassword(e.target.value);
                            }
                        }>
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
                        <Button type='submit' id='btn' size='small' fullWidth='true' variant="contained" >Sign In</Button>
                    </form>
                    <small>Designed & Developed By Group 77</small>
                </div>
            </div>
        </div>
    )
}