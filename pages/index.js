import Image from 'next/image';
import dataJSON from '../public/data.json';
export default function Home() {
    let data = dataJSON;
    return (
        <div className='grid'>
            <div className='user'>
                <div className='user-info'>
                    <Image
                        src='/images/image-jeremy.png'
                        alt='user profile picture'
                        width='100px'
                        height='100px'
                    />
                    <span>
                        <small>Report for</small>
                        <h3>Jeremy Robson</h3>
                    </span>
                </div>
                <div className='selection'>
                    <ul>
                        <a href=''>
                            <li>Daily</li>
                        </a>
                        <a href=''>
                            <li>Weekly</li>
                        </a>
                        <a href=''>
                            <li>Monthly</li>
                        </a>
                    </ul>
                </div>
            </div>
            {data.map((el) => (
                <div key={el.title}> {el.title}</div>
            ))}
        </div>
    );
}
