import { useState } from "react";
import BlogList from "./BlogList";
const Home = () =>{
    const [blogs, setBlogs] = useState([
        {title: 'My new bestie', body:'lorem ipsum...', author:'mario', id:1},
        {title: 'Welcome party', body:'lorem ipsum...', author:'luigi', id:2},
        {title: 'Learning react', body:'lorem ipsum...', author:'yoshi', id:3}
    ]);
    const handleDelete = (id) =>{
        const newBlogs = blogs.filter((blog)=>(blog.id!==id))
        setBlogs(newBlogs);
    }
    return(
        <div className = "home">
            <BlogList blogs = {blogs} title = "All Blogs" handleDelete = {handleDelete}></BlogList>
        </div>
    )
}
export default Home;