import {Link} from "react-router-dom";

function CurrentUser (userData: User|undefined){

    if(typeof userData?.sub == "undefined"){
        return <div><Link to="/login"> Logowanie </Link></div>
    }

    function handleLogout() {
        Cookies.remove('token')
        location.reload()
    }

    return (
        <>
            <div>{userData.sub}</div>
            <div>
                <button type="submit" className="btn btn-primary" onClick={handleLogout}>Wyloguj</button>
            </div>
            </>
            )
            }

            import {User} from "../interfaces/User.ts";
import Cookies from "js-cookie";

export default CurrentUser