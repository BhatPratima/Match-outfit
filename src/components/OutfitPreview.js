import React from 'react';

const OutfitPreview = ({ outfit, onRemoveItem, onClearAll }) => {
  return (
    <div className="outfit-preview">
      <div className="outfit-items">
        {outfit.map((item, index) => (
          <div key={index} className="outfit-item-preview">
            <img src={item.image} alt="Outfit Item" className="item-image" />
            <button onClick={() => onRemoveItem(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button className="clear-all-button" onClick={onClearAll}>Clear All</button>
    </div>
  );
};

export default OutfitPreview;






