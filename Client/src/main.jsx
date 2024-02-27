import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './axiosConfig.jsx';
import { AuthProvider } from './hooks/useAuth.jsx';
import { PurchaseProvider } from './hooks/usePurchase.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <App />
        <ToastContainer 
          position="bottom-right"
          autoClose= {5000}
          hideProgressBar={false}
          closeOnClick
          rtl = {false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
    </AuthProvider>
  </React.StrictMode>,
)
