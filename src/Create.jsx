import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState(" ");
    const [body, setBody] = useState(" ");
    const [author, setAuthor] = useState("mario");
    const [isPending, setisPending] = useState(false); 
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        setisPending(true);
        fetch('http://localhost:5000/blogs/',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            setisPending(false);
            navigate("/");
            console.log("Blog added");
        })
    }
    return(
        <div className="create">
            <h1>Add new Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                <label>Body</label>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} required></textarea>
                <label>Author</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending&&<button>Submit</button>}
                {isPending&&<button disabled>Submitting...</button>}
            </form>
        </div>
            );
}

export default Create;