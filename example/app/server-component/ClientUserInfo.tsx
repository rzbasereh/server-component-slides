'use client';

import getComponentType from '@/app/get-component-Type';
import {useEffect, useState} from 'react';

type ServerUserInfo = {
    id: string;
    name: string;
}

console.log('ClientUserInfo', getComponentType());

export default function ClientUserInfo() {
    const [users, setUsers] = useState<ServerUserInfo[]>([]);

    useEffect(() => {
        fetch('https://dummyapi.online/api/users')
            .then((response) => response.json())
            .then(newUsers => setUsers(newUsers))
    }, []);


    return <div className="border p-2 flex flex-col gap-2">
        {users.map(user => <div key={user.id} className="border p-2">{user.name}</div>)}
    </div>
}