import Image from 'next/image';
import TimeCard from '../components/TimeCard';
import Profile from '../components/Profile';
import { useState } from 'react';
import { useAppContext } from '../components/AppContext';
export default function Home() {
    let {state} = useAppContext();
    let {data} = state;
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
