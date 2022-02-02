const Navbar = () => {
    return ( 

<nav className="navbar">

<h1> The  Blog! </h1>

<div className="links"></div>
<a href="/" style= {{
color:"white",
backgroundColor:'#f1356d',
borderRadius:'8px'

}}>Home</a>

<a href="/create" style= {{
color:"white",
backgroundColor:'#f1356d',
borderRadius:'8px'

}}>New Blog</a>


</nav>


     );
}
 
export default Navbar;