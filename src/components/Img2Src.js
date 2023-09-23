import React, { useState } from 'react';

const Img2Src = ({ src, alt, cdnFlag = true }) => {
  const cdnSrc = "https://52limingcom.oss-cn-guangzhou.aliyuncs.com" + src
  const [imgSrc, setImgSrc] = useState(() => cdnFlag ? cdnSrc : src);
  
  const handleImageError = () => {
    // 如果CDN 不能访问 则从本地访问
    setImgSrc(src);
  };

  return (
    <img
      src={imgSrc}
      onError={handleImageError}
      alt={alt}
    />
  );
};

export default Img2Src;