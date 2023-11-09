import React from 'react';
import OutfitItem from './OutfitItem';

const Closet = ({ items, onItemClick }) => {
  
  const groupedItems = {
    shirt: items.filter(item => item.type === 'shirt'),
    pants: items.filter(item => item.type === 'pants'),
    shoes: items.filter(item => item.type === 'shoes')
  };

  return (
    <div className="closet">
      <div className="closet-group">
        {groupedItems.shirt.map((item, index) => (
          <OutfitItem key={index} itemImage={item.image} onItemClick={() => onItemClick(item)} />
        ))}
      </div>
      <div className="closet-group">
        {groupedItems.pants.map((item, index) => (
          <OutfitItem key={index} itemImage={item.image} onItemClick={() => onItemClick(item)} />
        ))}
      </div>
      <div className="closet-group">
        {groupedItems.shoes.map((item, index) => (
          <OutfitItem key={index} itemImage={item.image} onItemClick={() => onItemClick(item)} />
        ))}
      </div>
    </div>
  );
};

export default Closet;




