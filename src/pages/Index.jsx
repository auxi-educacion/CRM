/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import Clientes from "../components/Clientes";
import { obtenerCleinte } from "../data/clientes";

export function loader(){
 const clientes = obtenerCleinte()
 return clientes
}

const Index = () => {
  
  const clientes = useLoaderData()


  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      {clientes.length ? ( 
      <table className="w-full bg-white mt-5 table-auto">
        <thead className="bg-blue-800 text-white"> 
          <tr>
            <th className="p-2">Cliente</th>
            <th className="p-2">Contactos</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
          <tbody>
            {clientes.map(clientes => (
              <Clientes
                cliente={clientes}
                key = {clientes.id}
              />
            ))}
          </tbody>
        
      </table>
      ):(
        <p className="text-center mt-10 "> No hay clientes aun</p>)}

    </>
  )
}

export default Index
