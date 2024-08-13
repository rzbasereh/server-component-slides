'use client';

import Discussion from '@/app/boundaries/Discussion';
import HitCounter from '@/app/boundaries/HitCounter';
import {useState} from 'react';
import getComponentType from '@/app/get-component-Type';

console.log('StatefulArticle', getComponentType());

export default function StatefulArticle() {
    const [count, setCount] = useState(0);

    return <div className="border flex flex-col gap-2 p-2">
        Discussion
        <Discussion/>

        HitCounter
        <HitCounter hits={count}/>

        <button onClick={() => setCount(prevCount => prevCount + 1)} className='bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded font-semibold text-white'>
            Hit
        </button>
    </div>
}