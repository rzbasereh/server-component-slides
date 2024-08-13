import getComponentType from '@/app/get-component-Type';

type ServerUserInfo = {
    id: string;
    name: string;
}

console.log('ServerUserInfo', getComponentType());

export default async function ServerUserInfo() {
    const users = await (fetch('https://dummyapi.online/api/users').then((response) => response.json())) as ServerUserInfo[]

    return <div className="border p-2 flex flex-col gap-2">
        {users.map(user => <div key={user.id} className="border p-2">{user.name}</div>)}
    </div>
}