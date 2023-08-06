import React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackButton() {
    // const history = useHistory();

    return (
        <>
            <IconButton
                aria-label="back"
                color="secondary"
                sx={{
                    position: "absolute",
                    top: "50px",
                    left: "15px",
                }}
                onClick={() => window.history.back()}
            >
                <ArrowBackIcon />
            </IconButton>
        </>
    );
}

export default BackButton;
