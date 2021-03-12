import React from 'react';
import classes from './DocumentPicker.module.css';
import Button from 'react-bootstrap/Button';
import FileUpload from '../FileUploadComponent/FileUploadComponent';

const DocumentPicker = props => {

    return (
        <div className={classes.container}>
            <div className={classes.fileUploads}>
                <FileUpload
                    setFile={props.setFirstFile} />
                <FileUpload
                    setFile={props.setSecondFile} />
                <FileUpload
                    setFile={props.setThirdFile} />
            </div>
            <div className={classes.button}>
                <Button variant="secondary" style={{
                    backgroundColor: '#151A44',
                    borderRadius: '4px'
                }}
                    disabled={props.disabled}
                    onClick={props.nextFunction}
                >
                    Next
                        </Button>
            </div>
        </div>
    )
}

export default DocumentPicker;