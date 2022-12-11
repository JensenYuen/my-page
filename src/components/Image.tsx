import React from 'react';
import { ProfileImg } from '../constants/constant';

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
      <img src={ProfileImg} alt="profile pic"/>
    </div>
  );
}

export default Image;
