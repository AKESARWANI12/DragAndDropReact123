// Editable.jsx
import React, { useState } from 'react';

const Editable = ({ item, onUpdate }) => {
  const [content, setContent] = useState(item.content);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUpdate = () => {
    onUpdate({ ...item, content });
  };

  return (
    <div>
      {item.type === 'TEXT' ? (
        <textarea value={content} onChange={handleContentChange} />
      ) : (
        <div>
          <img src={content} alt="Editable Image" />
          <input type="text" value={content} onChange={handleContentChange} />
        </div>
      )}
      <button style={{ backgroundColor: 'red', color: 'white' ,width:'400px;', height:'300px' }} onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default Editable;
