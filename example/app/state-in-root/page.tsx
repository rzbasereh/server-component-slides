'use client';

import Header from './Header';
import MainContent from './MainContent';
import {useState} from 'react';


export default function Homepage() {
    const [colorTheme, setColorTheme] = useState('light');

    return (
        <div>
            <Header/>
            <MainContent/>
        </div>
    );
}