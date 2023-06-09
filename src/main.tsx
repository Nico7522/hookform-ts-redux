import * as React from 'react'
import * as ReactDOM  from 'react-dom/client'
// import App from './App.js'
import './index.css'
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { route } from './route/route.js'
import store from './store.store';


const router = createBrowserRouter(route)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router} />
    {/* <App /> */}
    </Provider >
  </React.StrictMode>,
  

)
