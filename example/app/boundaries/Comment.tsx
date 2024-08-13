import getComponentType from '@/app/get-component-Type';

console.log('Comment', getComponentType());

export default function Comment(){
    return <div className='border p-2'>Comment</div>
}