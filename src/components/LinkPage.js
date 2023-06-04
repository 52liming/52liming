import React, { useState } from 'react';
import styles from './LinkPage.module.css';
import clsx from 'clsx';

export default function LinkPage(props) {
  const [links, setLinks] = useState(props.links);

  const handleClick = (link) => {
    window.open(link.link, '_blank');
  };

  const handleMouseEnter = (index) => {
    setLinks((prevLinks) => {
      return prevLinks.map((link, i) => {
        if (i === index) {
          return { ...link, hovered: true };
        }
        return link;
      });
    });
  };

  const handleMouseLeave = (index) => {
    setLinks((prevLinks) => {
      return prevLinks.map((link, i) => {
        if (i === index) {
          return { ...link, hovered: false };
        }
        return link;
      });
    });
  };

  return (
    <div className={styles.wrapper}>
      {links.map((link, index) => (
        <div
          key={link.name}
          className={clsx(styles.wrapperItem, { [styles.itemHovered]: link.hovered })}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onClick={() => handleClick(link)}
        >
          <img
            src={link.imgSrc}
            alt={link.name}
            className={styles.img}
          />
          <div className={styles.name}>{link.name}</div>
          <div className={styles.symbol} style={{}}>></div>
        </div>
      ))}
    </div>
  );
}
