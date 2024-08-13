import Comment from '@/app/boundaries/Comment';
import getComponentType from '@/app/get-component-Type';

console.log('Discussion', getComponentType());

export default function Discussion() {
    return <div className='border flex gap-2 p-2'>
        <Comment/>
        <Comment/>
    </div>
}