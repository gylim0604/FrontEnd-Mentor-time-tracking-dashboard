import React from 'react';
import Image from 'next/image';
import styles from '../styles/Profile.module.css';
import { useAppContext } from './AppContext';

const SelectionLink = ({ title, onClick, active }) => {
    return (
        <a href='#' onClick={onClick} className={active ? styles.active : ''}>
            <li>{title}</li>
        </a>
    );
};

function Profile() {
    const selection = ['Daily', 'Weekly', 'Monthly'];
    let { state, handleChange } = useAppContext();
    let { selected } = state;
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <Image
                    src='/images/image-jeremy.png'
                    alt='user profile picture'
                    width='70px'
                    height='70px'
                    className={styles.profile_pic}
                />
                <span>
                    <small>Report for</small>
                    <h3>Jeremy Robson</h3>
                </span>
            </div>
            <div className={styles.selection}>
                <ul>
                    {selection.map((el) => (
                        <SelectionLink
                            key={el}
                            onClick={() => handleChange(el)}
                            title={el}
                            active={el === selected}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Profile;
