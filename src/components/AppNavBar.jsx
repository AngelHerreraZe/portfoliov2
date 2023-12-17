import React from 'react';

const AppNavBar = ({work, setWork}) => {
    return (
        <nav className='nav-bar'>
            <ul className='nav-content'>
                <li><a onClick={() => setWork(true)}>Angel Herrera</a></li>
                {work ? <li><a onClick={() => setWork(false)}>About</a></li>  : <li><a onClick={() => setWork(true)}>Back</a></li> }
            </ul>
        </nav>
    );
};

export default AppNavBar;