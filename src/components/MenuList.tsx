import {User} from "../interfaces/User.ts";
import {Link} from "react-router-dom";

function MenuList(userData: User|undefined) {

    if(userData?.scope === "ROLE_ADMIN") {
        return (
            <ul className="dropdown-menu">
                <li><Link to="/create/student"> Dodaj studenta </Link></li>
                <li><Link to="/create/teacher"> Dodaj nauczyciela </Link></li>
                <li><Link to="/create/course"> Dodaj przedmiot </Link></li>
            </ul>
        )
    }
    if(userData?.scope === "ROLE_TEACHER") {
        return (
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Mój Profil</a></li>
                <li><a className="dropdown-item" href="#">Przedmioty</a></li>
            </ul>
        )
    }
    if(userData?.scope === "ROLE_STUDENT") {
        return (
            <ul className="dropdown-menu">
                <li><Link to="/student"> Profil </Link></li>
                <li><Link to="/courses"> Przedmioty i oceny </Link></li>
            </ul>
        )
    }
}

export default MenuList