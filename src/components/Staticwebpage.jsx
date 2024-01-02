
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

