import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppRouter from './AppRouter.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AppRouter />
    </DndProvider>
  </React.StrictMode>
)

// ReactDOM.render(
//  ,
//   document.getElementById('root')
// );