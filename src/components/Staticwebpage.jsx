// // StaticWebpage.jsx
// import React, { useEffect, useState } from 'react';

// const StaticWebpage = ({ items }) => {
//   return (
//     <div>
//       <h1>Static Webpage</h1>
//       <img src={photo1}></img>
//       <div>
//         {items.map((item, index) => (
//           <div key={index}>
//             {item.type === 'TEXT' ? (
//               <p>{item.content}</p>
//             ) : (
//               <img src={item.content} alt={`Image ${index}`} />
             
//             )}
//           </div>
//         ))}
//       </div>
   
//     </div>
//   );
// };

// export default StaticWebpage;
import React from 'react';
 import photo1 from "./photos/hayat 6.png";
const Staticwebpage = ({ location }) => {
  // Parse the query parameter to get the items
  const items = JSON.parse(new URLSearchParams(location.search).get('items')) || [];
  console.log("kuttA",items);
  return (

    <div>
      <img src={photo1} alt="Hayat 6" />
      {items}
    </div>
  );
};

export default Staticwebpage;

