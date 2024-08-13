import getComponentType from '@/app/get-component-Type';

console.log('MainContent', getComponentType());

export default function MainContent() {
    return <div className='border p-2'>MainContent</div>
}