// import React from 'react'
// import "./Main.css";
// import Portfolio from './portfolio';
// const Mainbar = () => {
//   return (
    // <div className="maincontainer">
    //     <div className='ayush'> 
    //            <p>Website Section</p>
    //     </div>
    //     <div className='kriti'>  
    //            <button>SAVE</button> 
    //      </div>
     
    // </div>
 // MainBar.jsx
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



    // MainBar.jsx
// import React from 'react';
// import Editable from './Editable';
// import Portfolio from './portfolio';

// const MainBar = ({ items, onUpdateItem }) => {
//   return (
//     <div>
//       {items.map((item, index) => (
//         <Editable key={index} item={item} onUpdate={onUpdateItem} />
//       ))}
    
//       <div style={{ border: '1px solid black', padding: '10px', minHeight: '100px', minWidth: '200px' }}>
//         {/* Render portfolio items here, you can use the same Editable component */}
       
//         {items.map((item, index) => (
//           <Editable key={index} item={item} onUpdate={onUpdateItem} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainBar;

