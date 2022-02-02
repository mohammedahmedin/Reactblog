import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () =>{

    const [blogs, setblogs] =  useState(null);  
    const [isLoading, setisLoading] = useState(true);
   
    useEffect(() =>{
        setTimeout(() => {
       
        fetch( 'http://localhost:8000/blogss')
            .then (res => {
                console.log(res)
                if(!res.ok){
                    throw Error('Could not fetch the data for that resourse!');
                }

            return  res.json();
            })
            .then(data => { 
            
                setblogs(data);
                setisLoading(false);
            })
            .catch(err => {

                console.log(err.message);
            })
    },1000);
    
    },[]);

    return (

        <div className="Home">

        {isLoading && <div>Loading...</div>}
    {blogs &&  <BlogList blogs= {blogs} title='All Blogs!'/>}
   
         </div>

    );


}
        
export default Home ;