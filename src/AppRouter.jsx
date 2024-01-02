// import React from 'react'
// import Draggable from 'react-draggable'

// import Combined from './components/Combined'
// const App = () => {
//   return (
//     <div>
//  <Combined/>
//     </div>
//   )
// }

// export default App;

// AppRouter.jsx
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Staticwebpage from './components/Staticwebpage';

import Combined from './components/Combined';


const AppRouter = () => {
  return (
    <div>
  <BrowserRouter>
      <Routes>
        <Route path="/combined" element={<Combined/>}></Route>
        <Route path="/static" exact render={() => <Staticwebpage items={items} />} />
        <Route path='/' element={<Combined/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  
  );
};

export default AppRouter;



// index.js or App.js

