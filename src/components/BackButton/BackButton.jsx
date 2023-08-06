import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton() {
    const history = useHistory();

    return (
        <button 
        id="back-button"
        onClick={() => window.history.back()}
        >
            Back
        </button>

    );
}

export default BackButton;
