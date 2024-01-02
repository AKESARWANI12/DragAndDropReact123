// import {useState,React} from 'react';

// const Portfolio = () => {
//   const headerStyle = {
//     backgroundColor: '#333',
//     color: 'white',
//     textAlign: 'center',
//     padding: '20px',
//   };

//   const projectListStyle = {
//     listStyleType: 'none',
//     padding: '0',
//   };
//   const projectItemStyle = {
//     marginBottom: '10px',
//   };
//   const footerStyle = {
//     backgroundColor: '#333',
//     color: 'white',
//     textAlign: 'center',
//     padding: '10px',
//     position: 'fixed',
//     bottom: '0',
//     width: '100%',
//   };


//   const [imageSrc, setImageSrc] = useState('default-image.jpg');

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const droppedFiles = e.dataTransfer.files;

//     if (droppedFiles.length > 0) {
//       const reader = new FileReader();

//       reader.onload = (event) => {
//         const newImageSrc = event.target.result;
//         setImageSrc(newImageSrc);
//       };

//       reader.readAsDataURL(droppedFiles[0]);
//     }
//   };


//   return (
//     <div>
//       <header style={headerStyle}>
//         <h1>My PortFolio</h1>
//         <p>Web Developer</p>
//       </header>

//       <section>
//         <h2>About Me</h2>
//         <p>
//           Welcome to my portfolio! I am a passionate web developer with a focus on creating
//           user-friendly and engaging experiences.
//         </p>
//       </section>
// <br/><br/>
//       <section>
//         <h2>Projects</h2>
//         <ul style={projectListStyle}>
//           <li style={projectItemStyle}>
//             <strong>Project 1:</strong>Dicegame: It is a dice game whereusers can play this game<br></br> by clicking on dice which generates random digit from 1to 6.
//             <div
//       className="portfolio-container"
//       onDragOver={handleDragOver}
//       onDrop={handleDrop}
//     >
//       <img className="portfolio-image" src={imageSrc} alt="Portfolio Image" />
//     </div>
//             <br></br>
//             <a href="https://dice-game-pi-six.vercel.app/">Dicegame</a>
//           </li>
//           <li style={projectItemStyle}>
//             <strong>Project 2:</strong>This Crypto Trading App is a cutting-edge web application built <br></br>using React.js, designed to provide users with
// real-time insights into the cryptocurrency market<br></br>
//             <a href="https://kaleidoscopic-sprinkles-ce3b71.netlify.app/">Crypto-Trading-App</a>
//             <div
//       className="portfolio-container"
//       onDragOver={handleDragOver}
//       onDrop={handleDrop}
//     >
//       <img className="portfolio-image" src={imageSrc} alt="Portfolio Image" />
//     </div>
//           </li>
//           {/* Add more projects as needed */}
//         </ul>
//       </section>

//       <section>
//         <h2>Contact</h2>
//         <p>Email: kesarayush2502@gmail.com</p>
//         <p>LinkedIn: https://www.linkedin.com/in/ayush-kesarwani-3011a91b8/</p>
//         {/* Add more contact information as needed */}
//       </section>

//       {/* <footer style={footerStyle}>
//         <p>&copy; 2024 Your Name. All rights reserved.</p>
//       </footer> */}
//     </div>
//   );
// };

// export default Portfolio;
import React, { useEffect, useState } from 'react';

import Draggable from 'react-draggable';
// import './App.css'; // Assume you have a corresponding CSS file for styling

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
  // const [portfolioText, setPortfolioText] = useState({text:"Ayuah" ,content:"initial"});

  // const[text ,settext] = useState("name");

  // const handleDrop1 = (event) => {
  //   event.preventDefault();
  //   const draggedText = event.dataTransfer.getData("text");

  //   useEffect(()=>{
  //     setPortfolioText(prev=>{return {text:"Ayush",content:draggedText?.content}});
  //   } ,[])

  //   console.log(draggedText,portfolioText);
  //   setPortfolioText(prev=>{return {text:"Ayush",content:draggedText?.content}});
  //   settext(draggedText.content)
  // };

  // const allowDrop1 = (event) => {
  //   event.preventDefault();
  // };

  // const handleDrag1 = (event) => {
  //   event.dataTransfer.setData("text", event.target.innerText);
  // };

  // const data = JSON.stringify(portfolioText) ;


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


// import React, { useState } from 'react';

// const portfolio = () => {
//   const [portfolioText, setPortfolioText] = useState("Initial Text");
//   const [imageSource, setImageSource] = useState("path/to/default/image.jpg");

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const draggedData = JSON.parse(event.dataTransfer.getData("text/plain"));
//     setPortfolioText(draggedData.text);
//     setImageSource(draggedData.image);
//   };

//   const allowDrop = (event) => {
//     event.preventDefault();
//   };

//   const handleDrag = (event) => {
//     const draggedData = {
//       text: portfolioText,
//       image: imageSource,
//     };
//     event.dataTransfer.setData("text/plain", JSON.stringify(draggedData));
//   };

//   return (
//     <div
//       onDrop={handleDrop}
//       onDragOver={allowDrop}
//     >
//       <p
//         draggable
//         onDragStart={handleDrag}
//       >
//         {portfolioText}
//       </p>
//       <img
//         src={imageSource}
//         alt="Portfolio Image"
//         style={{ maxWidth: '100%', maxHeight: '200px' }}
//       />
//     </div>
//   );
// };

// export default portfolio;