import '../styles/overview.css';
import { useState } from 'react';
import Axios from 'axios';

export default function Overview(){

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
                {/* <form onSubmit={handleUpload}>
                    <input type="file" onChange={handleFileInput} />
                    <button type="submit">Upload</button>
                </form> */}
            </div>
        </div>
    )
}