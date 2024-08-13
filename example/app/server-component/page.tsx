import getComponentType from '@/app/get-component-Type';
import ServerUserInfo from '@/app/server-component/ServerUserInfo';
import ClientUserInfo from '@/app/server-component/ClientUserInfo';

console.log('App', getComponentType());

export default async function App() {

    return <div className="border flex gap-2 p-2 w-fit">
        <ClientUserInfo/>
    </div>
}