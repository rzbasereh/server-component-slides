'use client';

import Header from './Header';
import MainContent from './MainContent';
import {useState} from 'react';
import getComponentType from '@/app/get-component-Type';

console.log('Homepage', getComponentType());

export default function Homepage() {
    const [colorTheme, setColorTheme] = useState('light');

    return (
        <div>
            <Header/>
            <MainContent/>
        </div>
    );
}