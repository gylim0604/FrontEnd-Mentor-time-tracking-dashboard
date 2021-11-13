import Image from 'next/image';
import TimeCard from '../components/TimeCard';
import Profile from '../components/Profile';
import { useState, useEffect } from 'react';
import { useAppContext } from '../components/AppContext';

export default function Home() {
    let { state, handleChange } = useAppContext();
    let { data } = state;

    useEffect(() => {
        handleChange('Daily');
    }, []);
    return (
        <div className='grid'>
            <Profile />
            {data.map((el) => (
                <TimeCard
                    key={el.title}
                    state={{
                        title: el.title,
                        prev: el.timeframes.current,
                        curr: el.timeframes.previous,
                    }}
                />
            ))}
        </div>
    );
}
