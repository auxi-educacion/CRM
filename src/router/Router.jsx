import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from '../pages/NuevoCliente'
import Index,{loader as clientesLoader} from '../pages/Index'
import ErrorPage from '../components/ErrorPage'
import EditarCliente,{loader as editarClienteLoader, action as editarClienteAction} from '../pages/EditarCliente'
import { action as eliminarClienteAction } from '../components/Clientes'
export const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout />,
    children:[
     {
      index: true,
      element: <Index />,
      loader: clientesLoader,
      errorElement : <ErrorPage/>
     },{
      path: '/cliente/nuevo',
      element: <NuevoCliente />,
      action: nuevoClienteAction,
      errorElement: <ErrorPage/>
     },
     {
      path: '/clientes/:clienteId/editar',
      element: <EditarCliente/>,
      loader: editarClienteLoader,
      action: editarClienteAction,
      errorElement :<ErrorPage/> 
     },{
      path: '/cliente/:clienteId/eliminar',
      action: eliminarClienteAction

     }
    ]
  },
])