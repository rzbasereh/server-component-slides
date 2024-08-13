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
        <div className='border flex gap-2 p-2 w-fit'>
            {props.children}
        </div>
    );
}