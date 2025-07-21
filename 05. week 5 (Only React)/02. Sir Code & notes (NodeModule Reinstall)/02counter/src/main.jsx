//As this was sir's file from github. Hence after downloading it we just did npm install to install the dependencies or node_modules and npm run dev to run the project
//Here we will be studying hooks which are generally rarely used but are very important to know. As they help us during big troubles.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
