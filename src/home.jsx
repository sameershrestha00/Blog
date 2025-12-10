import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";
const Home = () =>{
    const {data, isPending, error} = useFetch("http://localhost:5000/blogs/");
    return(
        <div className="home">
            {error && <div> Error Loading</div>}
            {isPending && <div>Loading..</div>}
            {data && <BlogList blogs = {data} title = "My Blogs" ></BlogList>}
    </div>
    );
}
export default Home;