import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import Cookies from "js-cookie";

interface User{
    sub?: string
    scope?: string
}

function Navbar(){

    const [userData, setUserData] = useState<User>({})

    useEffect( () => {
        if(typeof Cookies.get('token') !== "undefined") {
            setUserData(jwtDecode<User>(Cookies.get('token')!))
        }
    }, [])

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Grade Book</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>{userData.sub}</div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Menu
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Mój Profil</a></li>
                                <li><a className="dropdown-item" href="#">Przedmioty</a></li>
                                <li><a className="dropdown-item" href="#">Oceny</a></li>

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar