import React, { useState } from 'react';
import './App.css';
import Closet from './components/Closet';
import OutfitPreview from './components/OutfitPreview';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    const newItemType = item.type;
    
    const updatedOutfit = selectedItems.filter(existingItem => existingItem.type !== newItemType);// Filter out the previously selected items of the same type
    
    setSelectedItems([...updatedOutfit, item]);// Add the clicked item to the outfit
  };

  const handleRemoveItem = (index) => {
    const updatedOutfit = selectedItems.filter((_, i) => i !== index);
    setSelectedItems(updatedOutfit);
  };

  const handleClearAll = () => {
    setSelectedItems([]);
  };


  const isMatchingOutfit = selectedItems.every((item, index, array) => {
    return index === 0 || item.color === array[index - 1].color;
  });

  const outfitMessage = isMatchingOutfit ? 'Your outfit matches!' : 'Your outfit mismatches in color.';

  return (
    <div className="app">
      <div className="centered-heading">
        <h1>Outfit Coordination App</h1>
      </div>
      <Closet
        items={[
          { image: process.env.PUBLIC_URL + '/shirt-red.jpg', color: 'red', type: 'shirt' },
          { image: process.env.PUBLIC_URL + '/shirt-blue.jpg', color: 'blue', type: 'shirt' },
          { image: process.env.PUBLIC_URL + '/shirt-green.jpg', color: 'green', type: 'shirt' },
          { image: process.env.PUBLIC_URL + '/shirt-yellow.jpg', color: 'yellow', type: 'shirt' },
          { image: process.env.PUBLIC_URL + '/shirt-purple.jpg', color: 'purple', type: 'shirt' },
          

          { image: process.env.PUBLIC_URL + '/pants-red.jpg', color: 'red', type: 'pants' },
          { image: process.env.PUBLIC_URL + '/pants-blue.jpg', color: 'blue', type: 'pants' },
          { image: process.env.PUBLIC_URL + '/pants-green.jpg', color: 'green', type: 'pants' },
          { image: process.env.PUBLIC_URL + '/pants-yellow.jpg', color: 'yellow', type: 'pants' },
          { image: process.env.PUBLIC_URL + '/pants-purple.jpg', color: 'purple', type: 'pants' },
        
          { image: process.env.PUBLIC_URL + '/shoes-red.jpg', color: 'red', type: 'shoes' },
          { image: process.env.PUBLIC_URL + '/shoes-blue.jpg', color: 'blue', type: 'shoes' },
          { image: process.env.PUBLIC_URL + '/shoes-green.jpg', color: 'green', type: 'shoes' },
          { image: process.env.PUBLIC_URL + '/shoes-yellow.jpg', color: 'yellow', type: 'shoes' },
          { image: process.env.PUBLIC_URL + '/shoes-purple.jpg', color: 'purple', type: 'shoes' },
        
        ]}
        onItemClick={handleItemClick}
      />
      <OutfitPreview
        outfit={selectedItems}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAll}
      />
      <div className="outfit-message">
        <p>{outfitMessage}</p>
      </div>
    </div>
  );
};

export default App;
