import React from 'react'
import { Link , NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow">
      <Link to="/dashboard" className="navbar-brand ml-5">
         Dashboard
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/admin" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/addpost" className="nav-link">AddPost</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/post" className="nav-link">Post</NavLink>
        </li>
      </ul>

    </nav>
  </div>
  )
}

export default Navbar
