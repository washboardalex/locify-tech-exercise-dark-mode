import React from 'react';
import useDarkMode from 'use-dark-mode';

const DarkModeHeading = ({title, body}) => {
    const darkMode = useDarkMode(false);

    return (
        <div>
            <h1 
                style={ darkMode.value === true 
                    ? {borderBottom: '1px solid #dfdfdf', paddingTop: '50px'} 
                    : {borderBottom: '1px solid #333', paddingTop: '50px'}
                }
            >{title}</h1>
            <p>{body}</p>
        </div>
    );
}

export default DarkModeHeading;