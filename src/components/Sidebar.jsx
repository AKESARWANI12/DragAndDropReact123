// import React from 'react'
// import Draggable from "react-draggable";
// import photo1 from "../photo1/d3.png";
// import photo3 from "./photos/hayat 3.png";
// import photo4 from "./photos/hayat 4.png";
// import photo5 from "./photos/hayat 5.png";
// import photo6 from "./photos/hayat 6.png";
// import "./Side.css";
// const Sidebar = () => {
//   return (
//     <div className="sidecontainer">
 
//        <div className="textcollection">
//        <h2>Text</h2>
     
//        <div className="box1"><p>OM namah shivay</p></div>
//        <div className="box2"><p>OM namah </p></div>
//        <div className="box3"><p>OM namah kesar</p></div>
//        <div className="box4"><p>OM namah kriti</p></div>
//        <div className="box5"><p>OM namah vaishu</p></div>
       
     
//        </div>

//        <div className="box1"><p>Toolbar</p></div>

//        <div className="imagecollection">
//        <h2>Image</h2>
       
//        <img src={photo1} alt="eror" height="50px" width="50px"></img>
//        <img src={photo3} alt="eror" height="50px" width="50px"></img>
//        <img src={photo4} alt="eror" height="50px" width="50px"></img>
//        <img src={photo5} alt="eror" height="50px" width="50px"></img>
//        <img src={photo6} alt="eror" height="50px" width="50px"></img>

//        </div>
   
//  </div>
//   )
// }

// export default Sidebar;

import React from 'react';
import Draggable from 'react-draggable';
import photo1 from "../photo1/d3.png";
import photo3 from "./photos/hayat 3.png";
import photo4 from "./photos/hayat 4.png";
import photo5 from "./photos/hayat 5.png";
import photo6 from "./photos/hayat 6.png";
import "./Side.css";

const Sidebar = () => {
  const handleDragStart = (e, type, content) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ type, content }));
  };

  return (
    <div className="sidecontainer">
      <div className="textcollection">
        <h2>Text</h2>
        <Draggable>
          <div className="box1" onDragStart={(e) => handleDragStart(e, 'Ayush', 'OM namah shivay')} draggable>
          
            <p>AYUSH KESARWANI</p>
          </div>
        </Draggable>
        <Draggable>
          <div className="box1" onDragStart={(e) => handleDragStart(e, 'TEXT', 'OM namah shivay')} draggable>
            <p>BTECH NIT KURKSHETRA</p>
          </div>
        </Draggable>
        <Draggable>
          <div className="box1" onDragStart={(e) => handleDragStart(e, 'TEXT', 'OM namah shivay')} draggable>
            <p>ALLHAHABAD UP</p>
          </div>
        </Draggable>
        {/* ... other text items ... */}
      </div>

      <div className="box1">
        <p>Toolbar</p>
      </div>

      <div className="imagecollection">
        <h2>Image</h2>
        <Draggable>
          <div className="image-box" onDragStart={(e) => handleDragStart(e, 'IMAGE', photo1)} draggable>
            <img src={photo1} alt="Image 1" height="50px" width="50px" />
          </div>
        </Draggable>
        <Draggable>
          <div className="image-box" onDragStart={(e) => handleDragStart(e, 'IMAGE', photo1)} draggable>
            <img src={photo3} alt="Image 1" height="50px" width="50px" />
          </div>
        </Draggable>
        <Draggable>
          <div className="image-box" onDragStart={(e) => handleDragStart(e, 'IMAGE', photo1)} draggable>
            <img src={photo4} alt="Image 1" height="50px" width="50px" />
          </div>
        </Draggable>
        <Draggable>
          <div className="image-box" onDragStart={(e) => handleDragStart(e, 'IMAGE', photo1)} draggable>
            <img src={photo5} alt="Image 1" height="50px" width="50px" />
          </div>
        </Draggable>
        {/* ... other image items ... */}
      </div>
    </div>
  );
};

export default Sidebar;

