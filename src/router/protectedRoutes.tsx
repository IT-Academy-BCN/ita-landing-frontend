 
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute() {
    const {isLogged} = useSelector((state:any)=> state.apiPostRegister )
    
  return (
    <>
        {isLogged == true ?<Outlet/> : <Navigate to={'/'}/> }
    </>
  )
}