import getComponentType from '@/app/get-component-Type';

console.log('HitCounter', getComponentType());

export default function HitCounter({ hits }: {hits: number}) {
    return (
        <div className='border p-2'>
            Number of hits: {hits}
        </div>
    );
}