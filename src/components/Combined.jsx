


// import React, { useState, useEffect } from 'react';
// import { useDrop } from 'react-dnd';
// import Sidebar from './Sidebar.jsx';
// import MainBar from './Mainbar.jsx';
// import "./combine.css";

// import Portfolio from './Portfolio.jsx';
// const Combined = () => {
//   const [draggedItems, setDraggedItems] = useState([]);

//   useEffect(() => {
//     // Load items from local storage on mount
//     const storedItems = JSON.parse(localStorage.getItem('portfolioItems')) || [];
//     setDraggedItems(storedItems);
//   }, []);

//   const handleDrop = (item, target) => {
//     if (target === 'portfolio') {
//       setDraggedItems([...draggedItems, item]);
//     } else {
//       // Handle drop for MainBar (if needed)
//     }
//   };

//   const handleUpdateItem = (updatedItem) => {
//     const updatedItems = draggedItems.map((item) => (item === updatedItem ? updatedItem : item));
//     setDraggedItems(updatedItems);
//   };

//   const handleSave = () => {
//     // Save updated items to local storage
//     localStorage.setItem('portfolioItems', JSON.stringify(draggedItems));
//   };

//   const [{ isOver }, dropToPortfolio] = useDrop({
//     accept: ['TEXT', 'IMAGE'],
//     drop: (item) => handleDrop(item, 'portfolio'),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div>
//       <div style={{ display: 'flex' }}>
//         <div>
//           <Sidebar text="Image Item" type="IMAGE" />
//         </div>
//         <div>
//           <div ref={dropToPortfolio} style={{ border: `1px dashed ${isOver ? 'red' : 'black'}`, minHeight: '97vh', minWidth: '70vw' }}>
//             {/* Drop zone for items in Portfolio */}
//             <Portfolio items={draggedItems} onUpdateItem={handleUpdateItem} />
//           </div>
//           <MainBar items={draggedItems} onUpdateItem={handleUpdateItem} />
//           <button onClick={handleSave}>Save</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Combined;


// Combined.jsx
import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom';
import MainBar from './Mainbar.jsx';
import Sidebar from './Sidebar.jsx';

import Staticwebpage from './Staticwebpage.jsx';
import "./combine.css";
import Portfolio from './portfolio.jsx';

const Combined = () => {
  const [draggedItems, setDraggedItems] = useState([]);
 
  const navigate=useNavigate();

  useEffect(() => {
    // Load items from local storage on mount
    const storedItems = JSON.parse(localStorage.getItem('portfolioItems')) || [];
    setDraggedItems(storedItems);
  }, []);

  const handleDrop = (item, target) => {
    if (target === 'portfolio') {
      setDraggedItems([...draggedItems, item]);
    } else {
      // Handle drop for MainBar (if needed)
    }
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = draggedItems.map((item) => (item === updatedItem ? updatedItem : item));
    setDraggedItems(updatedItems);
  };

  // const handleSave = () => {
  //   // Save updated items to local storage
  //   localStorage.setItem('portfolioItems', JSON.stringify(draggedItems));

  //   // Redirect to the static webpage
  //   navigate('/static');
  // };
  const handleSave = () => {
    // Save updated items to local storage
    localStorage.setItem('portfolioItems', JSON.stringify(draggedItems));

    // Redirect to the static webpage with draggedItems as a query parameter
    navigate(`/static?items=${JSON.stringify(draggedItems)}`);
  };
  const [{ isOver }, dropToPortfolio] = useDrop({
    accept: ['TEXT', 'IMAGE'],
    drop: (item) => handleDrop(item, 'portfolio'),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>
          <Sidebar text="Image Item" type="IMAGE" />
        </div>
        <div>
          <div  style={{ border: `1px dashed ${isOver ? 'red' : 'black'}`, minHeight: '90vh', minWidth: '60vw' }}>
            <Portfolio/>
            <MainBar items={draggedItems} onUpdateItem={handleUpdateItem} />
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Combined;

