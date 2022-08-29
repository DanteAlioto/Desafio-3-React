import React from "react";

const Navbar = () => {

let logo = <img src="React-Syntonize.png" width="100" />

return(
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">{logo}</a>
        <span class="navbar-text">ReactEcommerce</span>

        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item px-4">
                    <a class="nav-link active px-4" href="#">Inicio</a>
                </li>
                <li class="nav-item px-4 ">
                    <a class="nav-link px-4" href="#">Productos</a>
                </li>
                <li class="nav-item px-4">
                    <a class="nav-link px-4" href="#">Contacto</a>
                </li>
            </ul>
        </div>

        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</nav>
)
}

export default Navbar;