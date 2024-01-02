
import React, { useEffect, useState } from 'react';

import Draggable from 'react-draggable';


const Portfolio = () => {
  const [imageSrc, setImageSrc] = useState('default-image.jpg');

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;

    if (droppedFiles.length > 0) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const newImageSrc = event.target.result;
        setImageSrc(newImageSrc);
      };

      reader.readAsDataURL(droppedFiles[0]);
    }
  };
  const [portfolioText, setPortfolioText] = useState({ text: "Ayuah", content: "initial" });
  const [text, setText] = useState("name");
  const handleDrop1 = (event) => {
    event.preventDefault();
    const draggedText = event.dataTransfer.getData("text");

    setPortfolioText((prev) => {
      return { ...prev, text: "Ayush", content: draggedText?.content };
    });
    setText(draggedText.content);
   
    console.log(draggedText, portfolioText);
   

  
  };

  

  const allowDrop1 = (event) => {
    event.preventDefault();
  };

  const handleDrag1 = (event) => {
    event.dataTransfer.setData("text", event.target.innerText);
  };

  const data = JSON.stringify(portfolioText);
 

  const [portfolioText1, setPortfolioText1] = useState({ text: "Ayush", content: "initial" });

  const handleDrop2 = (event) => {
    event.preventDefault();
    const draggedText = JSON.parse(event.dataTransfer.getData("text"));

    setPortfolioText1({
      text: draggedText.text,
      content: draggedText.content,
    });
  };

  const allowDrop2 = (event) => {
    event.preventDefault();
  };

  const handleDrag2 = (event, text, content) => {
    const draggedData = { text, content };
    event.dataTransfer.setData("text", JSON.stringify(draggedData));
  };


  const handleDragStop = (event, ui) => {
    // Update the position of the dropped element
    const { x, y } = ui;
    event.target.style.position = 'fixed';
    event.target.style.left = `${x}px`;
    event.target.style.top = `${y}px`;
  };



  return (
    <>
    <div
      className="portfolio-container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      
    >
      <img className="portfolio-image" src={imageSrc} alt="Portfolio Image" />
    </div>

    <br/><br/>

    {/* <div
      onDrop={handleDrop1}
      onDragOver={allowDrop1}
    >
      <p
        draggable
        onDragStart={handleDrag1}
      >
        {portfolioText?.content}
      </p>
    </div>


    <p>sfgfghgsfdghgmn</p> */}
    <div
        onDrop={handleDrop1}
        onDragOver={allowDrop1}
        draggable
        onDragStart={handleDrag1}
      >
        {portfolioText?.content}
      </div>
      <p>sfgfghgsfdghgmn</p>


      <div>
      <div onDrop={handleDrop2} onDragOver={handleDragStop}    >
        {portfolioText1?.content}
      </div>

      <Draggable onStop={handleDragStop}>
        <div className="box1" onDragStart={(e) => handleDrag2(e, 'Ayush', 'OM namah shivay')}  draggable>
          <p>AYUSH KESARWANI</p>
        </div>
      </Draggable>

      <Draggable onStop={handleDragStop}>
        <div className="box1" onDragStart={(e) => handleDrag2(e, 'TEXT', 'OM 2 shivay')} draggable>
          <p>BTECH NIT KURKSHETRA</p>
        </div>
      </Draggable>

      <Draggable onStop={handleDragStop}>
        <div className="box1" onDragStart={(e) => handleDrag2(e, 'TEXT', 'OM 3 shivay')} draggable>
          <p>ALLAHABAD UP</p>
        </div>
      </Draggable>
    </div>
    </>
  );
};

export default Portfolio;


