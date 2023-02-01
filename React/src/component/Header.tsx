import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

    const logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("isSuccess");
        localStorage.removeItem("userDetails");
        localStorage.removeItem("isAdmin");
      };


  return (
    <article className="article-header ">
        <h1>Task Manager Application </h1>
        {/* Hi {localStorage.getItem("username")} */}
        <Link to="/">
          <button style={{ marginLeft: "1100px" }} onClick={logout}>
            Logout
          </button>

        </Link> 
        {/* {(localStorage.getItem("isAdmin") == "true")?<Link to="/Admin/addnewuser"><button className='btn btn-danger'>Add new User</button></Link>:null} */}
        
      </article>
  )
}
