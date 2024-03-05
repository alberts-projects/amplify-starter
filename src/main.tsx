import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
//import { record } from 'aws-amplify/analytics';

Amplify.configure(amplifyconfig);
Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
