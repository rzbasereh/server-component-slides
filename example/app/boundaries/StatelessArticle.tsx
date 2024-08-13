import Discussion from '@/app/boundaries/Discussion';
import HitCounter from '@/app/boundaries/HitCounter';
import getComponentType from '@/app/get-component-Type';

console.log('StatelessArticle', getComponentType());

export default function StatelessArticle(){
    return <div className='border flex flex-col gap-2 p-2'>
        Discussion
        <Discussion/>

        HitCounter
        <HitCounter hits={0}/>
    </div>
}