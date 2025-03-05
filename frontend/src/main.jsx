import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router}  future={{ 
        v7_startTransition: true, 
        v7_relativeSplatPath: true 
      }}  />
  </Provider>,
)
