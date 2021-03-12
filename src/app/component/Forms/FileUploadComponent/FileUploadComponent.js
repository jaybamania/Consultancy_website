import React from "react";

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
const FileUpload=(props)=> {
    // State to store uploaded file

    // Handles file upload event and updates state
    function handleUpload(event) {
        props.setFile(event.target.files[0]);
    }

    return (
        <div id="upload-box">
            <input type="file" onChange={handleUpload} />
        </div>
    );
}



export default FileUpload;