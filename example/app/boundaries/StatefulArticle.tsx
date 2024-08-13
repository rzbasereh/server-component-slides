'use client';

import Discussion from '@/app/boundaries/Discussion';
import HitCounter from '@/app/boundaries/HitCounter';
import {useState} from 'react';
import getComponentType from '@/app/get-component-Type';

console.log('StatefulArticle', getComponentType());

export default function StatefulArticle() {
    const [count, setCount] = useState(0);

    return <div className="border">
        <Discussion/>
        <HitCounter hits={count}/>

        <button onClick={() => setCount(prevCount => prevCount + 1)}>
            Hit
        </button>
    </div>
}