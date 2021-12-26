import { useState } from "react";

const Home = () => {
let name = 'Stevie';

    const handleclick = () => {

        name = 'Luigi';

        console.log(name);

    } 
       return ( 
        <div className="home">
        
        <h2>Home Page</h2>

        <p>{name}</p>
        <button onClick={handleclick}>Click me!</button>

        </div>

    ) ;
    } 
        
export default Home ;