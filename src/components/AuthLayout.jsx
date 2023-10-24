import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children,authentication=true}) {

    const navigate=useNavigate()
    const[loader,setLoader] = useState(true)

    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {

        //think about this logic clearly 
        //if authentication(this is supplied by user) is true then we need to check if the user is logged in or not with auth Status

        //TODO:we can make it more easy after words
        // if(authStatus===true){
        //     navigate('/')
        // }
        // else if(authStatus===false){
        //     navigate('/login')
        // }

            if(authentication && authStatus!==authentication){
                navigate('/login')
            }else if(!authentication && authStatus!==authentication){
                navigate('/')
            }
            setLoader(false)

     }, [authStatus,navigate,authentication])


  
       return loader ? <div>loading...</div> : <div>{children}</div>    
    
}

export default Protected
