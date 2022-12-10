import React from 'react';
import profile from '../assets/profile.png'

interface Props {
  className?: string
}

const Image = ({className}:Props) => {
  return(
    <div
      className={`${className}`}
      style={{
        objectFit: "contain",
        height: '65vh',
      }}
    >
      <img src={profile} alt="profile pic"/>
    </div>
  );
}

export default Image;
