import React from 'react';
import styles from '../styles/TimeCard.module.css';
function TimeCard({ state }) {
    let { title, prev, curr } = state;
    const generateIcon = (title) => {
        switch (title.toLowerCase()) {
            case 'work':
                return 0;
            case 'play':
                return 1;
            case 'study':
                return 2;
            case 'exercise':
                return 3;
            case 'social':
                return 4;
            case 'self care':
                return 5;
            default:
                return;
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.background}>{generateIcon(title)}</div>
            <div className={styles.info}>
                <h3>{title}</h3>
                <span className={styles.tracker}>
                    <p className={styles.current}>{curr}hrs</p>
                    <p className={styles.previous}>Last Week - {prev}hrs</p>
                </span>
            </div>
        </div>
    );
}

export default TimeCard;
