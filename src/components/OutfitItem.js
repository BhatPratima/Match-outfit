import React from 'react';

const OutfitItem = ({ itemImage, onItemClick }) => {
  return (
    <div className="closet-item" onClick={onItemClick}>
      <img src={itemImage} alt="Clothing Item" className="item-image" />
    </div>
  );
};

export default OutfitItem;


