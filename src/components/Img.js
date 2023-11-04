import Image from 'next/image';
import React from 'react';

const Img = (props) => {
  const src = props.src;
  const alt = props.alt;

  return (
    <Image
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto', display: 'block' }}
      loader={() => src}
      src={src}
      alt={alt}
    />
  );
};

export default Img;
