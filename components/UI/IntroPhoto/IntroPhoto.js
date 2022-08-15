import React from 'react';
import Image from 'next/image'

export const IntroPhoto = () => {
    return (
    <div>
        <Image
            layout="fill" quality={100} loading="eager" objectFit='cover' objectPosition="bottom bottom"
            src='/introPhoto.jpg' alt="Mountain range photo"
            />
    </div>
);}