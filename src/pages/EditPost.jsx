import React,{useEffect,useState} from 'react'
import {Container,PostForm} from '../components/index'
import { useNavigate,useParams } from 'react-router-dom'
import service from '../appwrite/appwriteConfig'
function EditPost() {
const [post,setPost]=useState(null);

const {slug} = useParams();

const navigate = useNavigate();


useEffect(() => {
  if(slug){
    service.getPost(slug).then((res)=>{
      if(res){
        setPost(res) 
    }
  })
  }
  else{
    navigate('/')
  }

},[slug,navigate])
   return post?(
    <div className='py-8'>
    <Container>
      <PostForm post={post} />
    </Container>
    </div>
   ):null
  
}

export default EditPost