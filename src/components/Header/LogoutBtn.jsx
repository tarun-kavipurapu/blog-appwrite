import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
function LogoutBtn() {
    const dispatch = useDispatch();
    function logoutHandler(){
        authService.logout().then(()=>dispatch(logout()));
    }
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logoutHandler}
    >
  Logout
</button>
  )
}

export default LogoutBtn