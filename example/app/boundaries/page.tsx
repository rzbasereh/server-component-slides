import getComponentType from '@/app/get-component-Type';
import Header from '@/app/boundaries/Header';
import StatelessArticle from '@/app/boundaries/StatelessArticle';

console.log('App', getComponentType());

export default function App() {
    return <div className='border flex gap-2 p-2 w-fit'>
        <Header/>
        <StatelessArticle/>
    </div>
}