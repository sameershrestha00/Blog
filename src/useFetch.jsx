import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setisPending] = useState(true); 
    useEffect(()=>{
        setTimeout(()=>{
        fetch(url)
        .then(res=>{
            if (!res.ok){
                throw Error ('Could not fetch data from the resource');
            }
            return res.json();
        })
        .then(
            data =>{
                setisPending(false);
                setError(false);
                setData(data);
                            
            }
        )
        .catch(err=>{
            setError(err.message);
            setisPending(false);
        });
    },1000)},[]);

    return {data, isPending, error};
}
export default useFetch;