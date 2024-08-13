import getComponentType from '@/app/get-component-Type';

console.log('Header', getComponentType());

export default function Header(){
    return <div className='border p-2'>Header</div>
}