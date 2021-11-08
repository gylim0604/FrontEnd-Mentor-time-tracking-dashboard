import Image from 'next/image';
import TimeCard from '../components/TimeCard';
import dataJSON from '../public/data.json';
import Profile from '../components/Profile';
export default function Home() {
    let data = dataJSON;
    return (
        <div className='grid'>
            <Profile />
            {data.map((el) => (
                <TimeCard
                    key={el.title}
                    state={{
                        title: el.title,
                        prev: el.timeframes.daily.current,
                        curr: el.timeframes.daily.previous,
                    }}
                />
            ))}
        </div>
    );
}
