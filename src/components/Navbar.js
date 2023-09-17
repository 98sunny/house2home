import React from "react";

function NavBar(){
 let navStyle={
    color:'Tomato'
 };

return(
<div class="topnav" style={navStyle}>
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
)
}
export default NavBar