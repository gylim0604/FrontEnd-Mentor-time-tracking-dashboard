import React from 'react';
import Image from 'next/image';
import styles from '../styles/Profile.module.css';
function Profile() {
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
                    <a href='#'>
                        <li>Daily</li>
                    </a>
                    <a href='#'>
                        <li>Weekly</li>
                    </a>
                    <a href='#'>
                        <li>Monthly</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default Profile;
