import React from 'react';
import styles from '../styles/TimeCard.module.css';
import bg from '../styles/Export.module.css';
import { useEffect } from 'react';
import Image from 'next/image';
function TimeCard({ state }) {
    let { title, prev, curr } = state;
    useEffect(() => {
        return () => {};
    }, []);
    const generateIcon = (title) => {
        let url = '/images/icon-';
        switch (title.toLowerCase()) {
            case 'work':
                return url + 'work.svg';
            case 'play':
                return url + 'play.svg';
            case 'study':
                return url + 'study.svg';
            case 'exercise':
                return url + 'exercise.svg';
            case 'social':
                return url + 'social.svg';
            case 'self care':
                return url + 'self-care.svg';
            default:
                return '';
        }
    };
    const generateColor = (title) => {
        switch (title.toLowerCase()) {
            case 'work':
                return bg['bg-work'];
            case 'play':
                return bg['bg-play'];
            case 'study':
                return bg['bg-study'];
            case 'exercise':
                return bg['bg-exercise'];
            case 'social':
                return bg['bg-social'];
            case 'self care':
                return bg['bg-self-care'];
            default:
                return;
        }
    };
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.background}
                style={{
                    // prettier-ignore
                    background: `url('${generateIcon(title)}') no-repeat,${generateColor(title)} `,
                    backgroundPosition: 'top -10px right 20px',
                }}
            ></div>
            <div className={styles.info}>
                <span className={styles.title}>
                    <h3>{title}</h3>
                    <a href='#'>
                        <svg
                            width='21'
                            height='5'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                                fillRule='evenodd'
                            />
                        </svg>
                    </a>
                </span>
                <span className={styles.tracker}>
                    <p className={styles.current}>{curr}hrs</p>
                    <p className={styles.previous}>Last Week - {prev}hrs</p>
                </span>
            </div>
        </div>
    );
}

export default TimeCard;
