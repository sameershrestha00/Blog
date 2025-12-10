import React from "react";
import {useParams } from 'react-router-dom';
import useFetch from './useFetch';
import {useNavigate} from 'react-router-dom';

const BlogDetails = () => {
    const{ id }=useParams();
    const{data:blog,isPending}=useFetch('http://localhost:5000/blogs/'+id);
    const navigate=useNavigate();
    
    const handleClick=()=>{
        fetch('http://localhost:5000/blogs/'+ blog.id,{
            method:'DELETE'
        }).then(()=>{
            navigate('/');
        })
    };

  return (
    <div className="blog-details">
        {isPending && <div> Loading...</div>}
        {
            blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
                    <button onClick={() => navigate(`/edit/${blog.id}`)}>Edit Blog</button>
                </article>
            )
        }

    </div>
  );
};
export default BlogDetails;