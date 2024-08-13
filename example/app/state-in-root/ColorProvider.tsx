'use client';

import {ReactNode, useState} from 'react';

type PropsType = {
    children?: ReactNode;
}

export default function ColorProvider(props: PropsType) {
    const [colorTheme, setColorTheme] = useState('light');

    return (
        <div>
            {props.children}
        </div>
    );
}