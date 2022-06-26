import React from 'react';
import Image from 'next/image'

import styles from './profilePhoto.module.css'

export const ProfilePhoto = () => {
    return (
    <div className={styles.VikarPhoto}>
        <Image
            width="200px" height="200px" quality={100} loading="eager" 
            src='/Mexico.jpg' alt="Profile photo"
            />
    </div>
);}