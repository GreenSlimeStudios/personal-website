import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage =()=>{
    return(<div><h1>Not Found Page X</h1><Link to={"/personal-website/"}><button>Go back home</button></Link></div>)
}

export default NotFoundPage;