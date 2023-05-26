import '../styles/overview.css';
import { useState } from 'react';
import Axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(FirstName, LastName, Email) {
    return { FirstName, LastName, Email};
}

const rows = [
    createData('Jhon', 'Doe', 'jhon@mail.com'),
    createData('Emma', 'Willson', 'emma@mail.com'),
    createData('Tharun', "Alvitigala", 'tharun@mail.com'),
    createData('Amith', 'Gamagedara', 'amith@mail.com'),
    createData('Ashan', "Herath", "ashan@mail.com"),
];

export default function Overview() {

    const [selectedFile, setSelectedFile] = useState(null);

    function handleFileInput(e) {
        setSelectedFile(e.target.files[0]);
    }

    function handleUpload(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', selectedFile);

        Axios.post('http://localhost:3001/upload', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='overviewSection'>
            <h3>Overview</h3>
            <div className="overviewContent">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell align="right">Last Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.FirstName}
                                    </TableCell>
                                    <TableCell align="right">{row.LastName}</TableCell>
                                    <TableCell align="right">{row.Email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}