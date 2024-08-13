'use client';

import {ReactNode, useState} from 'react';
import getComponentType from '@/app/get-component-Type';

type PropsType = {
    children?: ReactNode;
}

console.log('ColorProvider', getComponentType());

export default function ColorProvider(props: PropsType) {
    const [colorTheme, setColorTheme] = useState('light');

    return (
        <div>
            {props.children}
        </div>
    );
}