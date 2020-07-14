import React, { useState, useEffect } from 'react';

function IconSet() {
  const [icons, setIcons] = useState('');

  useEffect(() => {
    fetch('https://www.rockomni.com/mcds/assets/GlobalContent/NonStockImages/Icons/spark-core-icons-V12.svg')
      .then(r => r.text())
      .then((text) => {
        setIcons(text);
      }).then(() => {
        window.dispatchEvent(new CustomEvent('icons-loaded'));
      });
  }, [])

  return (
    <div aria-hidden="true" className='spark-icons' dangerouslySetInnerHTML={{ __html: icons }} />
  );
}

export default IconSet;