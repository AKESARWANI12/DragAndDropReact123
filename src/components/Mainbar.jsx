
import React from 'react';
import Editable from './Editable';

const MainBar = ({ items, onUpdateItem }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Editable key={index} item={item} onUpdate={onUpdateItem} />
      ))}
    </div>
  );
};

export default MainBar;



