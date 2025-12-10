import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/blogs/" + id)
            .then((res) => res.json())
            .then((data) => {
                setTitle(data.title || "");
                setBody(data.body || "");
                setAuthor(data.author || "");
            })
            .catch(() => {});
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = { title, body, author };
        fetch("http://localhost:5000/blogs/" + id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        })
            .then(() => navigate("/"))
            .finally(() => setIsPending(false));
    };

    return (
        <div className="edit">
            <h2>Edit Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Blog body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />

                <label>Author:</label>
                <input value={author} onChange={(e) => setAuthor(e.target.value)} />

                <button disabled={isPending} type="submit">
                    {isPending ? "Updating..." : "Update Blog"}
                </button>
            </form>
        </div>
    );
};

export default Edit;