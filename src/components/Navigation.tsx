import React from 'react';

const navItems = [
    'Home',
    'About Us',
    'Achievements',
    'Events',
    'Contact',
    'Hanshi',
    'Hanshi David',
    'Shihan',
];

const Navigation = () => {
    return (
        <nav>
            <ul>
                {navItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;