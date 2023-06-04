import React, { useState } from 'react';

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
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {links.map((link, index) => (
        <div
          key={link.name}
          style={{
            display: 'flex',
						justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
            backgroundColor: 'var(--ifm-pills-color-background-active)', //'rgba(0, 0, 0, 0.05)',
            borderRadius: '50px',
            margin: '10px',
            padding: '8px',
            cursor: 'pointer',
            transform: link.hovered ? 'scale(1.05)' : 'none',
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onClick={() => handleClick(link)}
        >
          <img
            src={link.imgSrc}
            alt={link.name}
            style={{ width: '40px', height: '40px', borderRadius: '20px' }}
          />
          <div style={{
						width: '100%',
						textAlign: 'center',
						marginLeft: '10px auto',
						fontWeight: 'var(--ifm-font-weight-bold)',
						color: 'var(--ifm-link-color)',
						textDecoration: 'var(--ifm-link-decoration)',
						transition: 'color var(--ifm-transition-fast) var(--ifm-transition-timing-default)',
					}}>{link.name}</div>
          <div style={{ marginLeft: 'auto', marginRight: '25px' }}>></div>
        </div>
      ))}
    </div>
  );
}
