import React from 'react';
import useDarkMode from 'use-dark-mode';

const DarkModeComments = () => {
    const darkMode = useDarkMode(false);

    return (
        <div className="row mgn-crct">
            <h1 
                style={darkMode.value===true 
                    ? {borderBottom:'1px solid white', width:'100%', marginBottom:'25px'} 
                    : {borderBottom:'1px solid black', width:'100%', marginBottom:'25px'} 
                }
            >
                Comments
            </h1>
        </div>
    );
}

export default DarkModeComments;